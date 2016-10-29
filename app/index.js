var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');


var sentryKey = '78ea4f3797c645e3b0aef467096ac3bd';
var sentryApp = '110458';
var sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp;

var _APP_INFO = {
    name: 'Github Battle',
    branch: 'video4',
    version: '1.0'
}

Raven.config(sentryURL, {
    release: _APP_INFO.version,
    tags: {
        branch: _APP_INFO.branch
    }
}).install();

ReactDOM.render(
    routes, 
    document.getElementById('app')
    );