const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const removeAll = (e) => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];

    console.log(option);
};

const renderApp = () => {
    const template = (
        <div className="container">
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            <p>{app.options.length}</p>
            
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <div className="row">
                    <div className="col m2">
                        <button className="waves-effect waves-light btn green accent-4">Add Option</button>
                    </div>
                    <div className="col m2">
                        <button type="button" onClick={removeAll} className="waves-effect waves-light btn red accent-4">Remove All</button>
                    </div>
                    <div className="col m4">
                        <button disabled={app.options.length === 0} type="button" onClick={onMakeDecision} className="waves-effect waves-light btn">What should I do?</button>
                    </div>
                </div>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();




