let showDetails = false;
const appRoot = document.getElementById('app');

const showOrHide = () => {
    showDetails = !showDetails;
    renderApp();
};

function renderApp(){
    const template = (
        <div className="container">
            <h1>Visibility Toggle</h1>
            <button onClick={showOrHide} className="waves-effect waves-light btn">Show Details</button>
            {showDetails ? <p>This are some details!</p> : null}
        </div>
    );

    ReactDOM.render(template, appRoot)
};

renderApp();
