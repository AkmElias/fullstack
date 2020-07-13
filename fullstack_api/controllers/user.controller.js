exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.ANy one can access it");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content. Only authorised user can access it");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content. Only admin user can access it");
};
