var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var PropTypes = React.PropTypes;
var githubHelpers = require('../utils/githubHelpers'); 

var ConfirmBattleContainer = React.createClass({
 contextTypes: {
     router: PropTypes.object.isRequired
 },
 getInitialState: function(){
     return {
        isLoading: true,
        playerInfo: []
     }
    
 },
 componentDidMount: function() {
     var query = this.props.location.query;
     githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
     .then( 
         function(players){
             this.setState({
            //return players
             isLoading: false,
             playersInfo: [players[0],players[1]]
        })
    }.bind(this))
 },
  render: function () { 
    return (
       <ConfirmBattle isLoading={this.state.isLoading} 
            playersInfo={this.state.playersInfo} />
    )
  }
});

module.exports = ConfirmBattleContainer;