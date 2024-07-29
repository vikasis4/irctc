
const read = async (Model, req, res) => {
  // Find document by id
  const result = await Model.aggregate([
    {
      $lookup: {
        from: 'User', 
        localField: 'user',
        foreignField: '_id',
        as: 'userDetails'
      }
    },
    {
      $unwind: '$userDetails'
    },
    {
      $match: {
        'userDetails.email': req.params.email
      }
    }
  ]);
  // If no results found, return document not found
  if (!result) {
    return res.status(404).json({
      success: false,
      result: null,
      message: 'No document found ',
    });
  } else {
    return res.status(200).json({
      success: true,
      result,
      message: 'we found this document ',
    });
  }
};

module.exports = read;
