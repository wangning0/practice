import "babel-polyfill"
import React from 'react'
import { render } from 'react-dom'

import { history } from './services'
import routes from './routes'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import rootSaga from './sagas'

const store = configureStore(window.__INTIAL_STATE__)
store.runSaga(rootSaga)

render(
    <Root
        store={stoer}
        history={history}
        routes={routes} />,
    document.getElementById('root')
)
