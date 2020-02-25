const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use( 
    "/api",  
    proxy({ 
      target: "https://vast-sierra-07062.herokuapp.com", 
      // target: "http://127.0.0.1:8000", 
      changeOrigin: true
    })
  );
  // app.use(
  //   "/api/rest-auth/login/",
  //   proxy({
  //     target: "http://localhost:8000/"
  //   })
  // );
};