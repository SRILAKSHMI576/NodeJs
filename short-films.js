const shortfilms_resolver = function(req, res) {
  var shortfilms_list = [
    { name: "pelli chupulu", director: "v.v. vinayak" },
    { name: "sammatame", director: "suma kanakala" }
  ];
  res.send(shortfilms_list);
};

module.exports.shortfilms_resolver = shortfilms_resolver;
