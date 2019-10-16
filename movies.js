const movie_resolver = function(req, res) {
  var movie_details = [
    { name: "joker", Director: "phonix", producer: "varma" },
    { name: "jerssi", Director: "nani", producer: "rajamouli" },
    { name: "eegaa", Director: "samantha", producer: "nagachaitanaya" },
    { name: "u-turn", Director: "nagarjuna", producer: "samanthaa" },
    { name: "rangastalam", Director: "sukumar", producer: "ram charan" }
  ];
  res.send(movie_details);
};

module.exports.movie_resolver = movie_resolver;
