require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Tweet = require('./models/tweet');

const app = express();
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/1');
});

app.get('/:page', function (req, res, next) {
  let perPage = 10;
  let page = req.params.page || 1;

  Tweet.find({})
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec(function (err, result) {
      Tweet.countDocuments().exec(function (err, count) {
        if (err) return next(err);
        res.render('index', {
          title: 'Tweets',
          tweets: result,
          current: page,
          pages: Math.ceil(count / perPage),
        });
      });
    });
});

app.use((req, res) => {
  res.status(404).render('404', { title: 'Error' });
});
