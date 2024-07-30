const mongoose = require('mongoose');
const Admin = mongoose.model('Admin');

const create = async (Model, req, res) => {

  const adminId = req.params.id;


  if (!adminId) {
    return res.status(403).json({
      success: false,
      message: 'Admin Id is required',
    });
  }

  const admin = await Admin.findOne({
    _id: adminId,
    removed: false,
    enabled: true
  })
    .exec();

  if (!admin) {
    return res.status(403).json({
      success: false,
      message: 'This Admin is not Authorised to perform db Action',
    });
  }

  req.body.departureTime = new Date(req.body.departureTime);
  req.body.arrivalTime = new Date(req.body.arrivalTime);

  var result = await Model.create({
    ...req.body
  })

  return res.status(200).json({
    success: true,
    result,
    message: 'Suceesfull created the document',
  });

};

module.exports = create;
