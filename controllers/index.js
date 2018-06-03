const controllers = [
    require('./healthcheck'),
    require('./home'),
    require('./users'),
  ];
  
  const controllerRegister = application => {
    controllers.forEach(controller => {
      application.use('', controller.router);
    });
  };
  
  module.exports = controllerRegister;