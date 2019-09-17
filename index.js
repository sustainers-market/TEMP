const lambda = require("@sustainers/lambda");

module.exports = lambda().get(async (req, res) => {
  res.send([
    {
        url: "https://that.right/dotcom",
    }
  ]);
});
