const serials_resolver = function(req, res) {
  var serials_list = [
    { name: "kartheekadeepam", director: "muni" },
    { name: "maharshi", director: "hima" }
  ];
  res.send(serials_list);
};

module.exports.serials_resolver = serials_resolver;
