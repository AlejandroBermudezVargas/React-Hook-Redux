const appRoot = document.getElementById('app');


let count = 0;

const addOne = () => {
    count ++;
    renderCounterApp();
}

const minusOne = () => {
    count --;
    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
}

const renderCounterApp = () => {
    const templateTwo = (
        <div className="container">
            <div className="row">
                <h1>Count: {count}</h1>
                <div className="row">
                    <div className="col m2">
                        <button onClick={addOne} className="waves-effect waves-light btn green accent-4">+1</button>
                    </div>
                    <div className="col m2">
                        <button onClick={minusOne} className="waves-effect waves-light btn red accent-4">-1</button>
                    </div>
                    <div className="col m2">
                        <button onClick={reset} className="waves-effect waves-light btn blue accent-4">RESET</button>
                    </div>
                </div>
            </div>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();