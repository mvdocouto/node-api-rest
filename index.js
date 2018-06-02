const app = require('./app');


console.log('Server port ' + process.env.PORT);
app.listen(app.listen(5000), () => {
  console.log(`Magic happening on port 5000!`);
});
