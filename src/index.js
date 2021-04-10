import React from 'react';
import './index.css';
import store from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";


export const rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,document.getElementById('root')
    );
}
rerender(store.getState())
store.subscriber(rerender)
