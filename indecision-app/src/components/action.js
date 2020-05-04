var React = require('react');

const Action = (props) => (
    <div>
        <button onClick={props.handleOnMakeDecision} disabled={!props.hasOptions} type="button" className="waves-effect waves-light btn">What should I do?</button>
    </div>
);

export default Action;