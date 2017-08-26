import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
