// Boilerplate Code for HTTP Status Code API
const express = require('express');
const app = express();

/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504
*/
app.get('/status-info', (req,response)=>{
  let code=req.query.code
  if(code==200){
  let obj={
    status:200,
    message: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  };
  return response.send(obj);
}
else if (code ==201)
  {
  let obj={
      status: 201,
      message: "Created: The request has succeeded, and a new resource has been created as a result."
  };
  return response.send(obj);
  }
  else if (code ==204)
    {
    let obj={
      status: 204,
      message: "No Content: The server has successfully processed the request, but there is no content to return."
  };
  return response.send(obj);
    }
  else if (code ==400)
    {
    let obj={
    status: 400,
    message: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."

    };
    return response.send(obj);
    }
  else if(code==401)
  {
  let obj={
      status: 401,
      message: "Unauthorized: The request requires user authentication or the authentication has failed."
  
  };
  return response.send(obj);
  }
  else if (code ==403)
  {
  let obj={
    status: 403,
    message: "Forbidden: The server understood the request, but it refuses to authorize it."
  };
  return response.send(obj);
  }
  else if (code ==404)
  {
  let obj={
  status: 404,
  message: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  };
  return response.send(obj);
  }
  else if (code ==405)
  {
  let obj={
    status: 405,
    message: "Method Not Allowed: The method specified in the request is not allowed for the resource."
  
  };
  return response.send(obj);
  }
  else if (code ==429)
  {
  let obj={
    status: 429,
    message: "Too Many Requests: The user has sent too many requests in a given amount of time (rate limiting)."
  
  };
  return response.send(obj);
  }
  else if (code ==500)
  {
  let obj={
    status: 500,
    message: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  };
  return response.send(obj);
  }
  else if (code ==502)
  {
  let obj={
    status: 502,
    message: "Bad Gateway: The server was acting as a gateway or proxy and received an invalid response from the upstream server."

  };
  return response.send(obj);
  }
  else if (code ==503)
  {
  let obj={
    status: 503,
    message: "Service Unavailable: The server is not ready to handle the request, often due to maintenance or overload."

  };
  return response.send(obj);
  }
  else if (code ==504)
  {
  let obj={
    status: 504,
    message: "Gateway Timeout: The server was acting as a gateway or proxy and did not receive a timely response from the upstream server."
  
  };
  return response.send(obj);
}
  else{
    return response.send("Invalid");
  }
  
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
