/* import model memo */
const memo_model = require('../models/memo_model.js');

var memos = {
  /* function to show all data memo */
  showAllMemo : function(req, res, next){
    memo_model.find({}, function(err, data) {
      if (err) throw err;
      res.json(data);
    });
  },
  /* function to show one data memo */
  findOneMemo : function(req, res, next){
    memo_model.findOne({ memoid: req.params.memoid }, function(err, data) {
      if (err) throw err;
      res.json(data);
    });
  },
  /* function to edit one data memo */
  editOneMemo : function(req, res, next){
    memo_model.findOneAndUpdate({ memoid: req.body.memoid }, { title: req.body.title, memo_text: req.body.memo_text }, {new: true}, function(err, data) {
      if (err) throw err;
      res.json(data)
    });
  },
  /* function to delete one data memo */
  deleteOneMemo : function(req, res, next){
    memo_model.findOneAndRemove({ memoid: req.body.memoid }, function(err, data) {
      if (err) throw err;
      // we have deleted the user
      res.json(data)
    });
  },
  /* function to create new data memo */
  createNewMemo : function(req, res, next){
    // create a new memo
    var createMemo = memo_model({
      memoid: req.body.memoid,
      title: req.body.title,
      memo_text: req.body.memo_text
    });
    // save memo to database
    createMemo.save(function(err, data) {
      if (err) throw err;
      res.json(data);
    });

  }
}

module.exports = memos;
