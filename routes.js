module.exports = function(app) {
  const application = require('./routes/application');
  const users = require('./routes/users');
  const vendors = require('./routes/vendors');
  const trips = require('./routes/trips');
  const pricing = require('./routes/pricing');

  app.use('/', application);
  app.use('/users', users);
  app.use('/vendors', vendors);
  app.use('/trips', trips);
  app.use('/pricing', pricing);
  //other routes..
};
