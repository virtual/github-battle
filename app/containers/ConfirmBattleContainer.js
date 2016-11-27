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
  render: function () { 
    return (
       <ConfirmBattle />
    )
  }
});

module.exports = ConfirmBattleContainer;