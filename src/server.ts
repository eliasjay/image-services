import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({message: 'it works'})
})

app.listen(3333)
