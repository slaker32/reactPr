import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from 'react-redux'


export const rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store} >
                <App state={state}
                    dispatch={store.dispatch.bind(store)}
                store={store}/>
            </Provider>
        </React.StrictMode>,document.getElementById('root')
    );
}
rerender(store.getState())
