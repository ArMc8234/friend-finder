//Require the person array from the friendData.js file, get it, and parse it.
var friendData = require('../data/friendData');

//Exports the function that will perform the api-push to enter the new friend data then return the updated list to the selected urls.
module.exports = function(app){
    app.post("/api/buddy_list", function(request, response) {
        friendData.push(request.body);
        console.log("last friend: ", friendData[(friendData.length - 1)])
        response.json(friendData);
    });
    app.get("/api/buddy_list", function(req, res){
        res.json(friendData);
       
    });

};