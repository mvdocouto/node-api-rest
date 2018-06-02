const controllers = [
    require('./healthcheck'),
  ];
  
  const controllerRegister = application => {
    controllers.forEach(controller => {
      application.use('', controller.router);
    });
  };
  
  module.exports = controllerRegister;