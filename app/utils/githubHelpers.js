var axios = require('axios');

// github auth
var id = "CLIENT_ID";
var sec = "SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" +sec;

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param)
}; 

var helpers = {
    getPlayersInfo: function (players) {
        // .map allows loop over players array
        return axios.all(players.map(function(username){
            // so for each username in the array
            return getUserInfo(username)
        })).then(function (info) {
            return info.map(function (user) {
                return user.data
            })
        }).catch(function (err){
            console.warn('Error in getPlayersInfo', err)
        })
    }
};

module.exports = helpers;