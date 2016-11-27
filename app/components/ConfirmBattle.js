var React = require('react');

function ConfirmBattle(props) { 
    return (
         props.isLoading === true 
        ? <p>Loading</p>
        : <p>Info</p>
    )
}
 
module.exports = ConfirmBattle;