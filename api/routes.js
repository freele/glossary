module.exports = function(app) {
  // Closed API (distribut developers only) ////////////////////////////
  // Admin account Routes
  console.log('USE ROUTES');
  app.route('/api')
    .get(function(req, res, next) {
    	console.log('TEST API');
    	res.send('TEST API');
    });
}