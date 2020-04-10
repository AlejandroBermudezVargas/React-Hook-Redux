
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleOnMakeDecision = this.handleOnMakeDecision.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            options: []
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        });
    }

    handleOnMakeDecision() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist';
        }


        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        });
    }

    render() {
        const title = 'Indecision App';
        const SubTitle = 'Put your life in the hands of a computer';

        return (
            <div className="container">
                <Header title={title} subtitle={SubTitle} />
                <Action hasOptions={this.state.options.length > 0}
                    handleOnMakeDecision={this.handleOnMakeDecision}
                />
                <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

//Stateless Functional Component
const Header  = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h5>{props.subtitle}</h5>
        </div>
    );
}

//Stateless Functional Component
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handleOnMakeDecision} disabled={!props.hasOptions} type="button" className="waves-effect waves-light btn">What should I do?</button>
        </div>
    );
}

//Stateless Functional Component
const Options = (props) => {
    return (
        <div>
            <div>
                <button onClick={props.handleDeleteOptions} type="button" className="waves-effect waves-light btn red accent-4">Remove All</button>
            </div>
            <div>
                {
                    props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        </div>
    );
}

//Stateless Functional Component
const Option = (props) => {
    return (
        <div>
            Option: {props.optionText}
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return { error }
        });
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button className="waves-effect waves-light btn green accent-4">Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));