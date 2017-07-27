var mg = require("mongoose");

var JModel = mg.model("Journal", {
  text: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false,
    default: "User"
  }
});

module.exports = { JModel };
