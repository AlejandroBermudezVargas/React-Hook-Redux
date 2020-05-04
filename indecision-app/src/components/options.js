var React = require('react');
import Option from  './option.js'

const Options = (props) => {
    return (
        <div>
            <div>
                <button onClick={props.handleDeleteOptions} type="button" className="waves-effect waves-light btn red accent-4">Remove All</button>
            </div>
            <div>
                {
                    props.options.map((option) => <Option key={option} handleDeleteOption={props.handleDeleteOption} optionText={option} />)
                }
            </div>
        </div>
    );
}

export default Options;