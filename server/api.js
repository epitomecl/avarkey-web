module.exports = function(app, key) {

  const request = require('request')

  app.post('/api/genAvatar', (req, res) => {
  	const address = req.body.address || "1BoatSLRHtKNngkdXEeobR76b53LETtpyT"

	const formData = {
	  module: 'Avatar',
	  walletAddress: address
	}

	request.post({url:'http://13.209.194.1:5000/api/', formData: formData}, (err, httpResponse, body) => {
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