/**
 * Created by wangning on 2017/1/22.
 */
import Express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import Recipe from '../models/recipe';
import config from '../config';

const app = new Express();
const apiRoutes = Express.Router();
app.set('superSecret', config.secret);

apiRoutes.post('/login', (req, res) => {
  User.findOne({
    email: req.body.eamil,
  }, (err, user) => {
    if(err)
      throw err;
    if(!user) {
      res.json({
        success: false,
        messgae: 'Authentication failed. User not found.',
      })
    } else {
      const token = jwt.sign({ email: user.email }, app.get('superSecret'), {
        expires: 60 * 60 * 24,
      });
      res.json({
        success: true,
        messgae: 'Enjoy your token',
        token: token,
        userId: user._id
      });
    }
  })
});

apiRoutes.get('/setup', (req, res) => {
  const sampleUser = new User({
    username: 'ning',
    email: 'ran_ning@126.com',
    password: '111111',
    admin: true,
  });

  const sampleRecipe = new Recipe({
    id: '110ec58a-a0f2-4ac4-8393-c866d813b8d1',
    name: '番茄炒蛋',
    description: '番茄炒蛋，一道非常經典的家常菜料理。雖然看似普通，但每個家庭都有屬於自己家裡的不同味道',
    imagePath: 'https://c1.staticflickr.com/6/5011/5510599760_6668df5a8a_z.jpg',
    steps: ['放入番茄', '打個蛋', '放入少許鹽巴', '用心快炒'],
    updatedAt: new Date()
  });

  sampleUser.save((err) => {
    if(err)
      throw err;
    sampleRecipe.save((err) => {
      if(err)
        throw err;
      console.log('User saved successfully');
      res.json({ success: true })''
    });
  });
});

apiRoutes.get('/recipes', (req, res) => {
  Recipe.find({}, (err, recipes) => {
    res.status(200).json(recipes);
  })
});

apiRoutes.use((req, res, next) => {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if(token) {
    jwt.verify(token, app.get('superSecret'), (err, decoded) => {
      if(err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token',
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided',
    });
  }
});

apiRoutes.get('/authenticate', (req, res) => {
  res.json({
    success: true,
    message: 'Enjoy your token',
  });
});

apiRoutes.post('/recipes', (req, res) => {
  const newRecipe = new Recipe({
    name: req.body.name,
    description: req.body.description,
    imagePath: req.body.imagePath,
    steps: ['放入番茄', '打個蛋', '放入少許鹽巴', '用心快炒'],
    updatedAt: new Date()
  });

  newRecipe.save((err) => {
    if (err) throw err;
    console.log('User saved successfully');
    res.json({ success: true });
  });
});
// update recipe
apiRoutes.put('/recipes/:id', (req, res) => {
  Recipe.update({ _id: req.params.id }, {
    name: req.body.name,
    description: req.body.description,
    imagePath: req.body.imagePath,
    steps: ['放入番茄', '打個蛋', '放入少許鹽巴', '用心快炒'],
    updatedAt: new Date()
  } ,(err) => {
    if (err) throw err;
    console.log('User updated successfully');
    res.json({ success: true });
  });
});
// remove recipe
apiRoutes.delete('/recipes/:id', (req, res) => {
  Recipe.remove({ _id: req.params.id }, (err, recipe) => {
    if (err) throw err;
    console.log('remove saved successfully');
    res.json({ success: true });
  });
});

export default apiRoutes;
