
var ReactDOM = require('react-dom');
var React = require('react');
import IndecisionApp from './components/indesicion-app'

ReactDOM.render(<IndecisionApp options={['Devils Den', 'Second District']} />, document.getElementById('app'));