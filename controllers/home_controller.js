const database = require("../models/peers_model.js")

// [GET] /
module.exports.home = async (req, res) => {
    const results_query = await database.testData();

    console.log(results_query);

    res.send("it's home");
};