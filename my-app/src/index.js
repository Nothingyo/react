import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import All from './All';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<All />, document.getElementById('all'));

serviceWorker.unregister();
