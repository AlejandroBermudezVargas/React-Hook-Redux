var React = require('react');
import AddOption from './add-option.js'
import Header from './header.js'
import Action from './action.js'
import Options from './options.js'

class IndecisionApp extends React.Component {
    state = {
        options: []
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleOnMakeDecision = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((previousState) => ({ options: previousState.options.filter((option) => option != optionToRemove) }))
    }

    componentDidMount = () => {
        console.log('Fetching Data');
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('Saving data');
    }

    componentWillUnmount = () => {
        console.log('componentWillUnmount');
    }

    handleAddOption = (option) => {
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

export default IndecisionApp;