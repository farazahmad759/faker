# Welcome To Faker

Faker allows the frontend teams to get fake data via API calls. Currently we support the following `/users` and `/todos`. More routes will be added gradually along with some awesome features.

## 1. Users

### 1.1 Get one user by Id

You can get a user by `id`. To do this just send a `GET` request to `https://faker.dricup.com/api/v1/users/:id`.

Example: A `GET` request to `https://faker.dricup.com/api/v1/users/10` will give you the following response

```
{
    "msg": "users.getOne",
    "data": {
        "id": "10",
        "firstName": "Ora",
        "lastName": "Yost",
        "email": "10_Cole53@yahoo.com",
        "createdAt": "1988-10-22T16:07:07.804Z",
        "updatedAt": "1976-08-23T23:26:04.062Z",
        "deletedAt": "1972-10-29T11:37:33.123Z"
    }
}
```

### 1.2 Get multiple users

You can get multiple users by sending a `GET` request to `https://faker.dricup.com/api/v1/users`. By default, you'll get 20 results, but you can fetch up to 200 results by passing the parameter `?limit={number}`

Example: A `GET` request to `https://faker.dricup.com/api/v1/users?limit=2` will give you

```
{
    "msg": "users.getAll",
    "data": [
        {
            "id": 3,
            "firstName": "Crystal",
            "lastName": "O'Keefe",
            "email": "10_Brakus2@hotmail.com",
            "createdAt": "1980-10-09T01:25:20.255Z",
            "updatedAt": "1989-09-12T09:30:11.889Z",
            "deletedAt": "1983-04-02T00:42:33.983Z"
        },
        {
            "id": 10,
            "firstName": "Josephine",
            "lastName": "Block",
            "email": "10.Kuhn65@hotmail.com",
            "createdAt": "1976-03-18T03:16:27.856Z",
            "updatedAt": "1975-08-26T23:17:16.094Z",
            "deletedAt": "1984-01-28T17:54:22.717Z"
        }
    ]
}
```

## 2. Todos

### 2.1 Get one todo by Id

You can get a todo by `id`. To do this just send a `GET` request to `https://faker.dricup.com/api/v1/todos/:id`.

Example: A `GET` request to `https://faker.dricup.com/api/v1/todos/10` will give you the following response

```
{
    "msg": "todos.getOne",
    "data": {
        "id": "10",
        "title": "reiciendis",
        "content": "Mollitia natus nihil aut consectetur illo ab necessitatibus aut exercitationem.",
        "createdAt": "1985-03-20T14:30:47.547Z",
        "updatedAt": "1983-11-26T14:59:26.558Z",
        "deletedAt": "1989-10-10T20:28:04.149Z",
        "comopleted": true
    }
}
```

### 2.2 Get multiple todos

You can get multiple todos by sending a `GET` request to `https://faker.dricup.com/api/v1/todos`. By default, you'll get 20 results, but you can fetch up to 200 results by passing the parameter `?limit={number}`

Example: A `GET` request to `https://faker.dricup.com/api/v1/todos?limit=2` will give you

```
{
    "msg": "todos.getAll",
    "data": [
        {
            "id": 0,
            "title": "voluptatum",
            "content": "Aut expedita labore omnis pariatur qui autem omnis sint in.",
            "createdAt": "1978-02-24T18:03:30.829Z",
            "updatedAt": "1971-08-24T11:42:50.334Z",
            "deletedAt": "1972-05-31T14:48:50.722Z",
            "comopleted": true
        },
        {
            "id": 8,
            "title": "temporibus",
            "content": "Eaque molestiae accusantium exercitationem et aperiam aut quisquam omnis autem.",
            "createdAt": "1973-01-30T18:17:38.473Z",
            "updatedAt": "1986-10-30T10:45:45.284Z",
            "deletedAt": "1984-12-22T12:40:59.425Z",
            "comopleted": false
        }
    ]
}
```
