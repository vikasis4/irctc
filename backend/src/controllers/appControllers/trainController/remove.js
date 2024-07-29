


const remove = async (Model, req, res) => {

  const { id } = req.params;

  let result = await Model.findOneAndDelete({
    _id: id,
    removed: false,
  }).exec();

  if (!result) {
    return res.status(404).json({
      success: false,
      result: null,
      message: 'No client found by this id: ' + id,
    });
  }


  await Model.findOneAndUpdate(
    { _id: id },
    { removed: true }
  ).exec();


  return res.status(200).json({
    success: true,
    result: null,
    message: 'Successfully Deleted the client by id: ' + id,
  });
};
module.exports = remove;
