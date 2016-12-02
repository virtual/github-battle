var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');
var Loading = require('./Loading')

function puke(obj) {
    return <pre>{JSON.stringify(obj,2, ' ')}</pre>
}

function StartOver() {
    return (
        <div className="col-sm-12" style={styles.space}>
            <Link to='playerOne'>
                <button type="button" className="btn btn-lg btn-danger">Restart</button>
            </Link>
        </div>
    )
}

function Results(props) {

    if (props.isLoading === true) {
        return (
            <Loading />
        )
    }

    if (props.scores[0] === props.scores[1]) {
        return (
            <MainContainer>
                <h1>It's a tie!</h1>
                <StartOver/>
            </MainContainer>
        )
    }

    var winningIndex = props.scores[0] > props.scores[1]
        ? 0
        : 1;
    var losingIndex = winningIndex === 0
        ? 1
        : 0;
    return (
        <MainContainer>
            <h1>{props.header}</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header='Winner'>
                    <UserDetails
                        info={props.playersInfo[winningIndex]}
                        score={props.scores[winningIndex]}/>
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Loser'>
                    <UserDetails
                        info={props.playersInfo[losingIndex]}
                        score={props.scores[losingIndex]}/>
                </UserDetailsWrapper>
            </div>
            <StartOver/>
        </MainContainer>
    )
}

Results.PropTypes = {
    header: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    scores: PropTypes.array.isRequired,
    playersInfo: PropTypes.array.isRequired
}

module.exports = Results;