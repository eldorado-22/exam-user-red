import React  from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setUpStore} from "./Redux/store";
import ReactDOM from 'react-dom/client';
import App from "./App";



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = setUpStore()

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)