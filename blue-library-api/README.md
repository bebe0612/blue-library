# blue-library-api

The blue library rest api backend server project.

- Type : REST API server
- Language : javascript
- Framework : Express.js
- Database : Postgresql



## Setting

If you want to run the server located in `blue-library/blue-library-api`, you must follow the steps below.



#### 1. create `.env`  file

you must create `.env` file inside the `blue-library-api` directory and write key-value string about postgresql db information.

```shell
$ cd blue-library/blue-library-api
$ touch .env 
```

Because this project use Postgres database, you must write database endpoint information like below.

```makefile
# .env file
host=<your database host>
port=<your database port>
user=<user name to access db>
password=<user password to access db>
database=<database name>
```



#### 2. install package

Install package used in project by using npm.

```shell
$ cd blue-library/blue-library-api
$ npm install
$ npm start
```

