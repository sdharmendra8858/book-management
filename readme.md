# Book Management
In This Application we have provided some APIs to do **CRUD** operation on Books. This is a very simple Application.


## Process to run the application (1st way)
### pre-requisite
1. Docker
2. Docker Compose

### steps
1. Clone the repo
2. Navigate to development branch ```git checkout development```
3. Go to the folder of the application
4. Run ```docker-compose up``` or ```docker-compose up -d```
5. Access the endpoint by **http://localhost:3000**


## Process to run the application (2nd way)
### pre-requisite
1. MongoDb
2. Npm and Node

### steps
1. Clone the repo
2. Navigate to development branch ```git checkout development```
3. Go to the folder of the application
4. Update the connection string for mongodb in **.env** file
5. Execute ```npm install```
6. Execute ```npm run start```
7. Access the endpoint by **http://localhost:3000**


## Available endpoints are
### 1. Add an individual book info
Endpoint is : [POST] http://localhost:3000/book

cURL : ```curl --location 'http://localhost:3000/book' \
--header 'Content-Type: application/json' \
--data '{
    "title": "don't count",
    "summary": "Do give it a try",
    "author": "imaginary"
}'```

### 2. Get all book list info
Endpoint is : [GET] http://localhost:3000/

cURL : ```curl --location 'http://localhost:3000/book' \
--data '''```

### 3. Get individual book info
Endpoint is : [GET] http://localhost:3000/book/:id

cURL : ```curl --location 'http://localhost:3000/book/653ff40726d7d94ae5e46c17' \
--data ''```

### 4. Update Book info
Endpoint is : [PATCH] http://localhost:3000/book/:id

cURL : ```curl --location --request PATCH 'http://localhost:3000/book/653ffae58399966df1daf971' \
--header 'Content-Type: application/json' \
--data '{
    "title": "don't count vol.1"
}'```

### 5. Delete the book
Endpoint is : [DELETE] http://localhost:3000/book/:id

cURL : ```curl --location --request DELETE 'http://localhost:3000/book/653ffae58399966df1daf971' \
--data ''```