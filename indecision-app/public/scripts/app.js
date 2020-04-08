'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var appRoot = document.getElementById('app');

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var removeAll = function removeAll(e) {
    app.options = [];
    renderApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];

    console.log(option);
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options:' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'col m2' },
                    React.createElement(
                        'button',
                        { className: 'waves-effect waves-light btn green accent-4' },
                        'Add Option'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col m2' },
                    React.createElement(
                        'button',
                        { type: 'button', onClick: removeAll, className: 'waves-effect waves-light btn red accent-4' },
                        'Remove All'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col m4' },
                    React.createElement(
                        'button',
                        { disabled: app.options.length === 0, type: 'button', onClick: onMakeDecision, className: 'waves-effect waves-light btn' },
                        'What should I do?'
                    )
                )
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
