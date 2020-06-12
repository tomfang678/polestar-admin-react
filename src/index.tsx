// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
import {PolestarApp} from "@polestar/component-warehouse-react";
import * as serviceWorker from './serviceWorker';
import {App} from "./App";

ReactDOM.render(
    <React.StrictMode>
        <PolestarApp>
            <App/>
        </PolestarApp>
    </React.StrictMode>,
    document.getElementById('root')
);
serviceWorker.unregister();
