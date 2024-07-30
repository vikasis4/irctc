const mongoose = require('mongoose');
const TrainModel = mongoose.model('Train');

const create = async (Model, req, res) => {

  const { trainId, userId } = req.body;

  const seatInfo = await TrainModel.findOneAndUpdate(
    { _id: trainId, availableSeats: { $gt: 0 } },
    { $inc: { availableSeats: -1 } },
    { new: true, runValidators: true }
  );

  if (!seatInfo)
    return res.status(400).json({
      success: false,
      result: null,
      message: 'No Seats Available',
    });

  const result = await new Model({
    bookingNumber: Math.floor(Math.random() * 1000000000),
    user: userId,
    train: trainId
  })
    .save();


  return res.status(200).json({
    success: true,
    result,
    message: 'Successfully Created the document in Model ',
  });
};

module.exports = create;
