## 🤔 What is curl?
An http terminal client.<br>
And in **curl** you send requests and receive complete and raw responses, thus being more detailed and being able to learn better and even faster.

## 🧰 Chrome, Curl or Postman?
CHROME = HTTP client<br>
CURL = HTTP client<br>
POSTMAN = HTTP client<br>

Both are **work tools** (agile and useful in all their senses)

## 📝 Methods
In a simple **http** communication system we have some **input** and **output** methods for requests.

- **GET**: As the name suggests, this is the method of searching for something on the internet and receiving a copy (an example is simply accessing a website)
- **POST**:This feature is used to send data to the server for manipulation (an example of data is a user's registration data)
- **PUT**: This is used in REST APIs to create a new resource or replace an existing resource on the server with a complete representation sent in the request body (an example is replacing a user from a server)
- **DELETE**: This is a command used in RESTful APIs to remove or delete a specific resource (such as a user, post, or file from a server)

## 🖥️ Curl usage:
Let's say our http api/server is hosted at "http://localhost:3000", that is, this will be the main query port for our curl<br>
Therefore, routes such as /admin, /login, /register will be continuous parts of the api url, that is, http://localhost:3000 (example: http://localhost:3000/admin or http://localhost:3000/register)<br>

- **GET**: ```just access the website/api on the link```<br>
└─ **What happens in this method**?
```
Explain: In this case you will receive a simple response as a return from "GET"

{
	"message": "localhost:3000/"[* GET *]
}

Here server will respond with the GET method
```
- **POST**: ```curl -X POST http://localhost:3000/users```<br>
└─ **What happens in this method**?
```
Explain: In this case you will receive a simple response as a return from "POST"

{
	"message": "localhost:3000/users" [* POST *]
}

Here server will respond with the POST method
```
- **PUT**: ```curl -X PUT http://localhost:3000/users/1```<br>
└─ **What happens in this method**?
```
Explain: In this case you will receive a simple response as a return from "PUT"

{
  "message": "localhost:3000/users/1" [* PUT *]
}

Here server will respond with the PUT method   
```
- **DELETE**: ```curl -X DELETE http://localhost:3000/users/1```<br>
└─ **What happens in this method**?
```
Explain: In this case you will receive a simple response as a return from "DELETE"

{
  "message": "localhost:3000/users/1" [* DEL *]
}

Here server will respond with the DELETE method
```

## 📝 Usage example:

- On terminal use:<br> └ **curl -v -X POST http://localhost:3000/users | jq**

```Response:```
```shell
Trying ***.***.0.***:3000...
Established connection to ***.***.0.*** port 3000 from ***.***.0.*** port 48714 * using HTTP/1.x
> POST /users HTTP/1.1
> Host: 192.168.0.110:3000
> User-Agent: curl/8.18.0
> Accept: */*
> Request completely sent off
> HTTP/1.1 200 OK
> Content-Type: application/json
> Date: Tue, 10 Feb 2026 15:29:31 GMT
> Connection: keep-alive
> Keep-Alive: timeout=5
> Transfer-Encoding: chunked
> Connection #0 to host localhost:3000 left intact

{
  "message": "Create user post method!"
}
```

**Note: I formatted it manually and made it cleaner and more readable**

```Shell explain:```
```shell
curl = transfer a URL and use curl command.
-v = Makes  the  fetching more verbose/talkative. Mostly useful for debugging.
-X = Specifies  a  custom  request  method to use when communicating with the HTTP server. The specified request will be used (if the method is not passed, GET will be used as the default).
| = The standard output of command is connected  via  a  pipe  to  the  standard  input  of  command2.
jq = It is used to read, filter, format and transform JSON in the terminal, making it more readable and beautiful.
```

## 📝 Complete POST method usage:

```shell
curl -X POST http://localhost:3000/test \ -H "Content-Type: application/json" \ -d '{"test":1}'
```
```Shell explain:```
```shell
-H "Content-Type: application/json" = Add an HTTP HEADER and tell the server that the request is in JSON format.
-d '{ "test": 123456 }' = the "d" represents "data" that is passed in the request body, in this case an object.
```
**With this we can send a more complete request to the server.**