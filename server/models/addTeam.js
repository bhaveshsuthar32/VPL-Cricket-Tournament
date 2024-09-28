const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: String,
  adhar: String,
  village: String,
  role: String,
  image: String,
});

const teamSchema = new mongoose.Schema(
  {
    team_name: String,
    village: String,
    sponser_1: String,
    sponser_2: String,
    captain: String,
    mobile: String,
    logo: String,
    players: [playerSchema],
  },
  { timestamps: true }
);

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
