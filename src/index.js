import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
    render() {
        return <h1>hello1 react</h1>
    }
}

render(
    <App />,
    document.querySelector('#app')
)