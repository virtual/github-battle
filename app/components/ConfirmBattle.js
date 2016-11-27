var React = require('react');

function puke (obj) {
    return <pre> {JSON.stringify(obj, null, ' ')} </pre>
}

function ConfirmBattle(props) { 
    return (
         props.isLoading === true 
        ? <p>Loading</p>
        : <p>Info: {puke(props)}</p>
    )
}
 
module.exports = ConfirmBattle;