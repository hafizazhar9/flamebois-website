const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect("mongodb+srv://hafizzhar99:<password>@cluster0.cofjy4n.mongodb.net/?retryWrites=true&w=majority", )
  .then(() =>
    console.log(
      `Successfully Connected To MongoDB`
    )
  )
  .catch(error => {
    console.error(`Database Connection Error: ${error}`)
    process.exit(1)
  })

module.exports = mongoose
