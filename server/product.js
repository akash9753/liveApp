const express = require('express')
const router = express.Router()
const db = require('./db')
const utils = require('./utils')

router.get('/',(request,response) =>{
          const connection = db.connection()
          const statement = `select id, title, price, description, advertiseUrl from product;`
          connection.query(statement, (error, products)=>{
              connection.end()
              response.send(utils.createResult(error, products))
          })
})

router.post('/create',(request,response) =>{
          const {title, description, price} = request.body
          const statement =`insert into product (title, description, price) values ('${title}','${description}','${price}')`
          const connection = db.connection()
          connection.query(statement, (error, products)=>{
            connection.end()
          response.send(utils.createResult(error, products))
        })
})

router.put('/update/:id',(request,response) =>{
           const {id} = request.params
           const {title, description, price} = request.body
           const statement = `update product set title = '${title}',description = '${description}', price = '${price}' where id = ${id}`
           const connection = db.connection()
          connection.query(statement, (error, products)=>{
            connection.end()
          response.send(utils.createResult(error, products))
          })
})

router.delete('/delete/:id',(request,response) =>{
          const {id} = request.params

          const statement = `delete from product where id = ${id}`

          const connection = db.connection()
          connection.query(statement, (error, products)=>{
            connection.end()
          response.send(utils.createResult(error, products))
          })
})

module.exports = router