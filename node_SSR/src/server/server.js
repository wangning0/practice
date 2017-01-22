import Express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import config from './config';

import webpack from 'webpack';
import React from 'react';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { match, RouterContext  } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import  { fromJS } from 'immutable';

import webpackConfig from '../../webpack.config';
import routes from '../common/routes';
import configureStore from '../common/store';
import fetchComponentData from '../common/utils/fetchComponentData';
import apiRoutes from './controllers/api';

const app = new Express();
const port = process.env.PORT || 3000;
mongoose.connect(config.database);
app.set('env', 'production');
app.use('/static', Express.static(__dirname + '/public'));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

const handleRender = (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if(error) {
      res.status(500).send(error.message);
    } else if(redirectLocation) {
      res.direct(302, redirectLocation.pathname + redirectLocation.search);
    } else if(renderProps == null) {
      res.status(404).send('Not found');
    }
    fetchComponentData(req.cookies.token).then((response) => {
      let isAuthorized = false;
      if( response[1].data.success === true ) {
        isAuthorized = true;
      } else {
        isAuthorized = false;
      }
      const initialState = fromJS({
        recipe: {
          recipes: response[0].data,
          recipe: {
            id: '',
            name: '',
            description: '',
            imagePath: '',
          }
        },
        user: {
          isAuthorized: isAuthorized,
          isEdit: false,
        }
      });
      const store = configureStore(initialState);
      const initView = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );
      let state = store.getState();
      let page = renderFullPage(initView, state);
      return res.status(200).send(page);
    })
      .catch(err => res.end(err.message));
  })
};

const renderFullPage = (html, preloadedState) => (`
  <!doctype html>
  <html>
    <head>
      <title>OpenCook 分享料理的美好時光</title>
      <!-- Latest compiled and minified CSS -->
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
      <!-- Optional theme -->
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootswatch/3.3.7/journal/bootstrap.min.css">
    <body>
      <div id="app">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
      </script>
      <script src="/static/bundle.js"></script>
    </body>
  </html>`
);

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use('/api', apiRoutes);

app.use(handleRender);
app.listen(port, (error) => {
  if(error) {
    console.log(error);
  } else {
    console.infp(`==> 🌍 listening on port ${port} ,open up http://localhost:${port}/ in your browser`);
  }
});