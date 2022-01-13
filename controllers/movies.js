const Movie = require("../models/movie");


module.exports = {
    newMovie,
    create
};

function newMovie(req, res) {
    res.render('movies/new')
}

function create(req, res) {
    // convert nowShowings checkbox of undefined or boolean
    req.body.nowShowing = !!req.body.nowShowing;
    // remove any whiteSpace at start and end of cast
    req.body.cast = req.body.cast.trim();
    // Split cast into an array
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
    const movie = new Movie(req.body)
    movie.save(function(err) {
        // one way to handle errors
        if (err) return res.render('movies/new');
        console.log(movie);
        // for now, redirect to new.ejs
        res.redirect('/movies/new')
    });
}
