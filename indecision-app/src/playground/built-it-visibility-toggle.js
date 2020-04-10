class VisibilityToogle extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div className="container">
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility} className="waves-effect waves-light btn">Show Details</button>
                {this.state.visibility ? <p>This are some details!</p> : null}
            </div>
        );
    }
}


ReactDOM.render(<VisibilityToogle />, document.getElementById('app'));


// let showDetails = false;
// const appRoot = document.getElementById('app');

// const showOrHide = () => {
//     showDetails = !showDetails;
//     renderApp();
// };

// function renderApp(){
//     const template = (
//         <div className="container">
//             <h1>Visibility Toggle</h1>
//             <button onClick={showOrHide} className="waves-effect waves-light btn">Show Details</button>
//             {showDetails ? <p>This are some details!</p> : null}
//         </div>
//     );

//     ReactDOM.render(template, appRoot)
// };

// renderApp();
