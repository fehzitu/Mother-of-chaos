## 🖥️ Tests:

## ```GET```**:**
```Usage and response:```
```shell
curl http://localhost:3000/home | curl http://localhost:3000/
response object: { message: 'The home page!' }

curl http://localhost:3000/users
response object: { message: 'User list page!' }

curl http://localhost:3000/ping
response object: { message: 'Pong!' }
```

## ```POST```**:**
```Usage and response:```
```shell
curl -X POST http://localhost:3000/users
response object: { message: 'Create user!' }
```