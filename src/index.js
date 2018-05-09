import React from 'react'
import './common.scss';
import { render } from 'react-dom'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import RouterMap from './container/router.jsx'

class App extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <RouterMap />
                <Footer />
            </div>
        )
    }
}

render(
    <App />,
    document.querySelector('#app')
)

if (module.hot) {
    module.hot.accept();
}