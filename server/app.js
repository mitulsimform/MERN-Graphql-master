const express = require('express');
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
var cors = require('cors')
const app = express();
app.use(cors())
const mongoose = require('mongoose')



mongoose.connect('mongodb+srv://mitul:123@cluster0-ctpoz.mongodb.net/graphql-demo?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log("Db Connected")
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))
app.listen(4000, () => {
    console.log("Server listening to 4000")
})