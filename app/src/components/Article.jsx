import React, {Component, PureComponent} from 'react'

class Article extends PureComponent {

    state = {
    }

    /* shouldComponentUpdate(nextProps, nextState) {
        return this.state.isOpen !== nextState.isOpen
    } */

    componentWillMount() {
        console.log('---', 'mounting')
    }

    /* componentWillReceiveProps(nextProps) {
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    } */

    componentWillUpdate() {
        console.log('---', 'will update')
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props
        const body = isOpen &&<section className="card-text">{article.text}</section>
        return (
            <div className="card my-2">
                <div className="card-header d-flex justify-content-between">
                    <h2>
                    {article.title}
                    </h2>
                    <button className="btn-lg btn-dark" onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        creation date: {(new Date(article.date)).toLocaleDateString()} 
                    </h6>
                    {body}
                </div>
            </div>
        )
    }
}


export default Article