const express = require('express')
const fs = require('fs')
const app = express()
const gradesRouter = require('./routes/grades')

app.use(express.json())
app.use('/grades', gradesRouter)

app.listen(3000, () => {
  try {
    fs.readFile('grades.json', 'utf8', (err, data) => {
      if (err) {
        const jsonFile = {
          nextId: 1,
          grades: [],
        }
        fs.writeFile('grades.json', JSON.stringify(jsonFile), (err) => {
          if (err) {
            console.log(err)
          }
        })
      }
    })
  } catch (err) {
    console.log(err)
  }
})
