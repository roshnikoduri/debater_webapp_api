const mongoose =  require('mongoose');

const createDbConnection = async (url) => {
   await mongoose.connect(url)
}

module.exports = createDbConnection;