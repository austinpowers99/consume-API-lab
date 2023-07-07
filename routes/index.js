var express = require('express');
var router = express.Router();

const ROOT_URL = 'https://api.chucknorris.io/jokes/random';
// const URL_CATEGORY = 'https://api.chucknorris.io/jokes/categories';

router.get('/', async function(req, res, next) {
  const getJoke = await fetch(`${ROOT_URL}`)
    .then(res => res.json());
  const joke = getJoke.value;
  console.log(joke)

    // if (req.query) {
    //   const category = req.query.category;
    //   joke = await fetch(`${ROOT_URL}/random?category=${category}`)
    //     .then(res => res.json())
    // }
  res.render('index', { title: 'Chuck Norris Joke Generator', joke});
});

module.exports = router;
