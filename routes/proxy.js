var request = require('request');
const config = require('../config');

module.exports = (req, res, next) => {
  if(config.type === 'mock'){
    next();
    return false;
  }

  var opts = {
    url: config.apiServer + req.originalUrl,
    method: req.method,
    body: JSON.stringify(req.body),
    headers: {
      "content-type": "application/json"
    }
  };

  request(opts, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      if(config.type !== 'real'){
        //返回值不是json时跳出
        try{
          JSON.parse(body);
        }catch(err){
          next();
          return false;
        }
      }
      res.send(200, body);
    }
    else{
      if(config.type !== 'real'){
        next();
        return false;
      }
      res.status(response.statusCode).send({ error: error })
    }
  });
};
