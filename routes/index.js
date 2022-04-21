var express = require('express');
var router = express.Router();
var taskscollection = require('./users');

const app = express();
app.use("/public", express.static("public/"))

router.get('/', function(req, res, next) {
  taskscollection.find({}, (err, docs) => {
    res.render('index', { taskscollection: docs});
  })
});

router.post('/submit', (req, res, next) => { 
  taskscollection.create({
    content : req.body.task_tb
  }).then(() => {
    res.redirect("/");
  })
});

router.get('/remove/:id', (req, res) => {
  const id = req.params.id;
  taskscollection.findByIdAndRemove(id , (err) => {
    if (err) {
      res.send("Error Occured");
      throw err;
    }
    else {
      res.redirect('/');
    }
  })
});

router.get('/edit/:id', (req, res) => {
  const id = req.params.id;
  taskscollection.find({}, (err, docs) => {
    res.render('update', {taskscollection: docs, idupdate: id});
  });
})

router.post('/edit/:id', (req, res) => {
  const id = req.params.id;
  taskscollection.findByIdAndUpdate(id, {content : req.body.task}, err => {
    if (err) {
      res.send(err);
      throw(err);
    }
    else {
      res.redirect("/");
    }
  })
});

module.exports = router;
