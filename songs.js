const songs_resolver = function(req, res) {
  var songs_list = [
    { movie_name: "eega", song_name: "title song", movie_year: 2015 },
    { movie_name: "gangstar", song_name: "gangleader", movie_year: 2017 },
    {
      movie_name: "suryakantham",
      song_name: "nenene nenenea",
      movie_year: 2018
    },
    { movie_name: "hello", song_name: "hello hello", movie_year: 2017 },
    { movie_name: "sairaa", song_name: "ohh sairaa", movie_year: 2019 }
  ];
  res.send(songs_list);
};

module.exports.songs_resolver = songs_resolver;
