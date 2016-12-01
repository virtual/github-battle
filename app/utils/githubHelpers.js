var axios = require('axios');

// github auth
var id = "CLIENT_ID";
var sec = "SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" +sec;

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param)
}; 

function getRepos(username) {
    return axios.get('https://api.github.com/users/'+username+'/repos'+param+'&per_page=100');
}

function getTotalStars(repos) {
    return repos.data.reduce(function(prev, current){
        return prev + current.stargazers_count
    }, 0)
}

function getPlayersData(player) {
    // get repos
    // pass to get total stars
    // return obj with that data
    return getRepos(player.login)
        .then(getTotalStars)
        .then(function (totalStars){
            return {
                followers: player.followers,
                totalStars: totalStars
            }
        })
}

function calculateScores(players) {
    // algorithms to determine winners
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars
    ]
}

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
    },
    battle: function(players) {
        var playerOneData = getPlayersData(players[0]); //promises
        var playerTwoData = getPlayersData(players[1]);

        return axios.all([playerOneData, playerTwoData]) //once resolved
        .then(calculateScores)
        .catch(function(err) { console.warn('Error in getPlayersInfo: ', err)})

    }
};

module.exports = helpers;