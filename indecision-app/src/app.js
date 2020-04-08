class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const SubTitle = 'Put your life in the hands of a computer';
        const options = ['Thing One', 'Thing Two', 'Thing Four'];

        return (
            <div className="container">
                <Header title={title} subtitle={SubTitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h5>{this.props.subtitle}</h5>
            </div>
        );
    }
}

class Action extends React.Component {

    handlePick() {
        console.log('Alejandro');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick} type="button" className="waves-effect waves-light btn">What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        console.log('handleRemoveAll');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll} type="button" className="waves-effect waves-light btn red accent-4">Remove All</button>
                {this.props.options.length}
                <div>
                    {
                        this.props.options.map((option) => <Option key={option} optionText={option} />)
                    }
                </div>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}


class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if(option){
            console.log(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button  className="waves-effect waves-light btn green accent-4">Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));