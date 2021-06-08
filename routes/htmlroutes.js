const path = require("path");

module.exports = function(app) {

    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(_dirname, "../public/exercise.html"));
    });

    app.get("/stats", function(req, res) {
        res.sendFile(path.join(_dirname, "../public/stats.html"));
    });

};