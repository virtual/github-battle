var React = require('react');
var Results = require('../components/results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
    getInitialState:function(){
        return {
            isLoading: true,
            scores: []
        }
    },
    componentDidMount: function() {
        // calculate scores
        //console.log(this.props.location.state.playersInfo);
        githubHelpers.battle(this.props.location.state.playersInfo)
            .then(function(scores){
                this.setState({
                    scores: scores,
                    isLoading: false
                })
            }.bind(this))

    },
    render: function() {
        return (
            <Results
                header={this.props.route.header} 
                isLoading={this.state.isLoading}
                playersInfo={this.props.location.state.playersInfo} 
                scores={this.state.scores} />
        );
    }
})
    
module.exports = ResultsContainer;