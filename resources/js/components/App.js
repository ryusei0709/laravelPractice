import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return(
        <h1>hello laravel react test</h1>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

