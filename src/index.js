import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './Components/App';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
}

render(<App style={styles} />, document.getElementById('root'));