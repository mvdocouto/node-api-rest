const app = require('./app');

const port = process.env.PORT || 5000
app.listen(app.listen(port, '0.0.0.0'), () => {
  console.log(`Magic happening on port ${port}!`);
});
