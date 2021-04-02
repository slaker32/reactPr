import React from 'react';
import './index.css';
import state, {addPost, addPostText,subscriber} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


export const rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addPostText={addPostText} />
        </React.StrictMode>,document.getElementById('root')
    );
}
rerender(state)
subscriber(rerender)
