var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var PropTypes = React.PropTypes;

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
 },
  render: function () { 
    return (
       <ConfirmBattle isLoading={this.state.isLoading} 
            playersInfo={this.state.playersInfo} />
    )
  }
});

module.exports = ConfirmBattleContainer;