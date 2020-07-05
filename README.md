## Grades Control API

🇺🇸 This project is about developing an API called “grades-control-api” to controll students grades in different subjects of a course. Methods to allow all the CRUD operations can be used and through specific endpoints listed below the user can create, update, delete and view the grades.

The `nextId` property stores the next id that will be used when a new grade is created. The `grades.json` file consists of an array containing many grade entries, each one being composed by an object with **id, student, subject, type, value** and **timestamp**.

## Router from express

`grades.js` file was created inside `routes` folder and it informs each method and endpoint. It was exported on `index.js`:

```
const gradesRouter = require('./routes/grades.js')
app.use('/grades', gradesRouter)
```

Start by installing node modules: `npm i` and by running `nodemon`

## URL: http://localhost:3000

## POST:
Use the POST `/grades` endpoint to create a new grade. This endpoint receives as parameters the fields **student, subject, type and value**. This new entry is saved on `grades.json` file and has a unique id associated. The API guarantees the automatic increment of this identifier in a way it does not repeat among the entries. For each new entry, the `nextId` field is incremented and saved on the file.

## GET:
Use the GET `/grades/:id` endpoint to retrieve a specific grade. This endpoint receives the grade **id** as a parameter and displays the grade information.

## DELETE:
Use the DELETE `/grades/:id` to exclude a grade. This endpoint receives the grade id as a parameter and exclude the entry from the `grades.json` file.

## PUT:
Use the PUT `/grades` to update a grade. This endpoint receives the grade **id** as parameter in the json body of the request along with the **student, subject, type** and **value** fields. The endpoint validates if the informed grade exists, if not, returns an error. In case it exists, it updates the entry on `grades.json` file.

## GET: 
Use the GET `/grades/get-grade/:student/:subject` endpoint to check the final grade in a certain subject for a specific student. It will return the sum of all the grades for that student in that requested subject.

## GET: 
Use the GET `/grades/get-average/:subject/:type` to check the grade average on a certain subject and type. The endpoint receives **subject** and **type** as a parameter and returns the average.

## GET: 
Use the GET `/grades/order-grades/:subject/:type` to check the grades in a specific subject and type in a descending order.This endpoint receives as a parameter a **subject** and a **type**.


----------------------

🇧🇷 Este projeto consiste no desenvolvimento de uma API chamada “grades-control-api” para controlar notas de alunos em matérias de um curso. Foram criados métodos para realizar todas as operações de CRUD e através dos endpoints especificados abaixo, é possível criar, atualizar, excluir e consultar as notas dos alunos, aqui chamadas de grades.

A propriedade `nextId` armazena sempre o próximo id que será utilizado na criação de uma nova grade. O arquivo `grades.json` possui um array com várias grades, cada uma sendo representada por um objeto com os campos **id, student, subject, type, value e timestamp**.

## Utilização do Router do express
O arquivo `grades.js` foi criado dentro de `routes` informando cada método de endpoint e foi exportado em `index.js`:

```
const gradesRouter = require('./routes/grades.js')
app.use('/grades', gradesRouter)
```

comece instalando node modules: `npm i` e inicializando a aplicação com `nodemon`

## URL: http://localhost:3000

## POST:
Use o método POST no endpoint `/grades` para criar uma grade. Este endpoint recebe como parâmetros os campos **student, subject, type** e **value**. Essa grade é salva no arquivo `grades.json`, e tem um id único associado. A API garante o incremento automático desse identificador, de forma que ele não se repita entre os registros. A cada novo registro, o campo `nextId` é incrementado e salvo no próprio arquivo, de forma que na próxima inserção ele possa ser utilizado.

## GET:
Use o método GET no endpoint `/grades/:id` para consultar uma grade em específico. Esse endpoint recebe como parâmetro o **id** da grade e retornar suas informações.

## DELETE:
Use o método DELETE no endpoint `/grades/:id` Criação de um endpoint para excluir uma grade (). Esse endpoint recebe como parâmetro o id da grade e realizar sua exclusão do arquivo `grades.json`.

## PUT:
Use o método PUT no endpoint `/grades` para atualizar uma grade. Esse endpoint recebe como parâmetros o **id** da grade a ser alterada e os campos **student, subject, type** e **value**. O endpoint valida se a grade informada existe, caso não exista retorna um erro. Caso exista, o endpoint deverá atualizar as informações recebidas por parâmetros no registro, e realizar sua atualização com os novos dados alterados em `grades.json`.

## GET: 
Use o método GET no endpoint `/grades/get-grade/:student/:subject` para consultar a nota total de um aluno em uma disciplina. O endpoint deverá receber como parâmetro o **student** e o **subject**, e realizar a soma de todas as notas de atividades correspondentes ao subject, para aquele student. O endpoint retorna a soma da propriedade value dos registros encontrados.

## GET: 
Use o endpoint `/grades/get-average/:subject/:type` para consultar a média das grades de determinado subject e type. O endpoint deverá receber como parâmetro um **subject e um type**, e retornar a média. A média é calculada somando o registro value de todos os registros que possuem o subject e type informados, dividindo pelo total de registros que possuem este mesmo subject e type.

## GET: 
Use o endpoint `/grades/order-grades/:subject/:type` para retornar as notas em ordem decrescente de acordo com determinado subject e type. O endpoint deve receber como parâmetro um **subject e um type**.

