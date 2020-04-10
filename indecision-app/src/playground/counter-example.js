
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: this.props.count
        };
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>Count: {this.state.count}</h1>
                    <div className="row">
                        <div className="col m2">
                            <button onClick={this.handleAddOne} className="waves-effect waves-light btn green accent-4">+1</button>
                        </div>
                        <div className="col m2">
                            <button onClick={this.handleMinusOne} className="waves-effect waves-light btn red accent-4">-1</button>
                        </div>
                        <div className="col m2">
                            <button onClick={this.handleReset} className="waves-effect waves-light btn blue accent-4">RESET</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={5}/>, document.getElementById('app'))


















// const appRoot = document.getElementById('app');


// let count = 0;

// const addOne = () => {
//     count ++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count --;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div className="container">
//             <div className="row">
//                 <h1>Count: {count}</h1>
//                 <div className="row">
//                     <div className="col m2">
//                         <button onClick={addOne} className="waves-effect waves-light btn green accent-4">+1</button>
//                     </div>
//                     <div className="col m2">
//                         <button onClick={minusOne} className="waves-effect waves-light btn red accent-4">-1</button>
//                     </div>
//                     <div className="col m2">
//                         <button onClick={reset} className="waves-effect waves-light btn blue accent-4">RESET</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();