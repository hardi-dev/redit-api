const basicController = {}

basicController.get = (req, res) => {
  res.json({
    msg: 'Welcome to our API'
  })
}

module.exports = basicController;