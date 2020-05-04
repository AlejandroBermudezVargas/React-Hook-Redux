
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleOnMakeDecision = this.handleOnMakeDecision.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options: props.options
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handleOnMakeDecision() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
    }

    handleDeleteOption(optionToRemove) {
        this.setState((previousState) => ({ options: previousState.options.filter((option) => option != optionToRemove)}))
    }

    componentDidMount(){
        console.log('Fetching Data');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Saving data');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist';
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }

    render() {
        const SubTitle = 'Put your life in the hands of a computer';

        return (
            <div className="container">
                <Header />
                <Action hasOptions={this.state.options.length > 0}
                    handleOnMakeDecision={this.handleOnMakeDecision}
                />
                <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

//Stateless Functional Component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h5>{props.subtitle}</h5>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision App'
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
                    props.options.map((option) => <Option key={option} handleDeleteOption={props.handleDeleteOption} optionText={option} />)
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
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
                type="button" className="waves-effect waves-light btn red accent-4">Remove</button>
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

        this.setState(() => ({ error }));
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

ReactDOM.render(<IndecisionApp options={['Devils Den', 'Second District']} />, document.getElementById('app'));