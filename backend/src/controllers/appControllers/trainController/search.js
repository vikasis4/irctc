const search = async (Model, req, res) => {

  const fields = { $and: [] };

  if (req.query.source) {
    fields.$and.push({ source: { $regex: new RegExp(req.query.source, 'i') } });
  }

  if (req.query.destination) {
    fields.$and.push({ destination: { $regex: new RegExp(req.query.destination, 'i') } });
  }

  let results = await Model.find({
    ...fields,
  })
    .where('removed', false)
    .limit(20)
    .exec();

  if (results.length >= 1) {
    return res.status(200).json({
      success: true,
      result: results,
      message: 'Successfully found all documents',
    });
  } else {
    return res
      .status(202)
      .json({
        success: false,
        result: [],
        message: 'No document found by this request',
      })
      .end();
  }
};

module.exports = search;
