const mongoose = require('mongoose');
const Admin = mongoose.model('Admin');

const create = async (Model, req, res) => {

  const adminId = req.params.id;

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

  var result = await Model.create({
    ...req.body
  }).save()

  return res.status(403).json({
    success: false,
    result,
    message: 'Suceesfull created the document',
  });

};

module.exports = create;
