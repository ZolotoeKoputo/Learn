import React, { PureComponent } from 'react'
import ArticleList from './ArticleList'
import LoginForm from './LoginForm'
import articles from '../fixtures'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

class App extends PureComponent {
    state = {
        reverted: false
    }
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                    App name
                    <button className="btn btn-primary" onClick = {this.revert}>Revert</button>
                    </h1>
                </div>
                <LoginForm/>
                <ArticleList articles = {this.state.reverted ? articles.slice().reverse() : articles} />
            </div>
        )
    }

    revert = () => this.setState({
        reverted: !this.state.reverted
    })
}

export default App