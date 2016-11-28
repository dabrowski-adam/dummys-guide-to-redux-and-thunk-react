import './main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Hero from './components/Hero';

const store = configureStore();

render(
    <div>
        <Provider store={store}>
            <Hero />
        </Provider>
    </div>,
    document.getElementById('app')
);
