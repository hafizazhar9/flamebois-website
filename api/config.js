const serverURL = {
  port: process.env.PORT || 7000,
  host: process.env.HOST || 'localhost',
  serverUrl: () => {
    return `http://${process.env.HOST}:${process.env.PORT}`
  }
}

module.exports = serverURL
