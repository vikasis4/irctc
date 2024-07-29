
const create = async (Model, req, res) => {

  return res.status(403).json({
    success: false,
    message: 'Only Admin Can Create Data',
  });

};

module.exports = create;
