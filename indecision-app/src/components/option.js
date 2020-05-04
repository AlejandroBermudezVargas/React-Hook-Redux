var React = require('react');

const Option = (props) => (
    <div>
        Option: {props.optionText}
        <button
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
            type="button" className="waves-effect waves-light btn red accent-4">Remove</button>
    </div>
);

export default Option;