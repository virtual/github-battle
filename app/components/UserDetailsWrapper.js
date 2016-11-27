var React = require('react');
var PropTypes = React.PropTypes;

function UserDetailsWrapper(props){
    return (
        
        <div className="col-sm-6">
            <h2 className="lead">{props.header}</h2> 
            {props.children}
        </div>

    )
}

module.exports = UserDetailsWrapper;