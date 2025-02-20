const controllers = require('./controllers');

const router = (app) => {
  app.get('/page1', controllers.page1);
  app.get('/page2', controllers.page2);
  app.get('/page3', controllers.page3);
  app.get('/page4', controllers.page4);
  app.get('/getName', controllers.getName);
  app.get('/findByName', controllers.searchName);
  app.get('/findDogByName', controllers.searchDogName);

  app.get('/', controllers.index);

  app.get('/*', controllers.notFound);

  app.post('/setName', controllers.setName);
  app.post('/setDogName', controllers.setDogName);

  app.post('/updateLast', controllers.updateLast);
  app.post('/updateDog', controllers.updateDog);
};

// export the router function
module.exports = router;
