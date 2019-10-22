import React from 'react'
import ReactDOM from 'react-dom'
import { MobXProviderContext } from 'mobx-react'
import { createGlobalStyle } from 'styled-components'

import App from './App'
import * as serviceWorker from './serviceWorker'

const GlobalStyle = createGlobalStyle`
    html,
    body,
    #root {
        height: 100%;
    }
    body {
        margin: 0;
    }
    ul {
        padding: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
    }
    li {
        list-style-type: none;
    }
`

ReactDOM.render(
    <>
        <MobXProviderContext.Provider value={1}>
            <App />
        </MobXProviderContext.Provider>
        <GlobalStyle whiteColor />
    </>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
