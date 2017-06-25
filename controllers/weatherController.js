const axios = require("axios");
const promisify = require("es6-promisify");

exports.getWeather = async (req, res) => {
  const [lat, lng] = req.params.coords.split(',');
  const url = `https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}/${lat},${lng}`;
  const response = await axios.get(url);
  res.json(response.data);
};