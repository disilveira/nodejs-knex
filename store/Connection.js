const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://mongopuc:teste1234@cluster0.3bzuq.mongodb.net/nodemongo?retryWrites=true&w=majority'

const openConnection = () => mongoose.connect(connectionString, { useNewUrlParser: true })

module.exports = {
    openConnection,
}