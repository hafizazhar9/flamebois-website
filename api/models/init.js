const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect("mongodb://127.0.0.1:27017/RoomBooking2", )
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
