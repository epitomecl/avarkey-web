module.exports = function(app, key) {

  const request = require('request')

  app.post('/api/genAvatar', (req, res) => {
  	const address = req.body.address || "1BoatSLRHtKNngkdXEeobR76b53LETtpyT"

	const formData = {
	  module: 'Avatar',
	  address: address
	}

	request.post({url:'https://api.avarkey.com/', formData: formData}, (err, httpResponse, body) => {
	  if (err) {
	    console.error('err:', err)
	    return res.json({'flag': 0})
	  }
	  console.log(' Server responded with:', body)
	  return res.json({'flag': 1, 'result': JSON.parse(body)})
	})
  })

  app.get('/api', function(req, res) {
    res.send('API root')
  })

}