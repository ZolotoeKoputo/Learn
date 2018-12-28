import React, { Component } from 'react'
import './appHeader.scss'

import SearchPanel from '../searchPanel'

export default class AppHeader extends Component {

    render() {
        const {toDo, done} = this.props
        return (
            <header className="header bg-danger navbar-nav">
                <div className="d-flex justify-content-around">
                    <h1 className="heading display-5 text-white my-2 ml-5">Todo List</h1>
                    <h2 className="display-6 text-white my-2">{toDo} more to do, {done} done</h2>
                    <SearchPanel/>
                </div>
            </header>
        )
    }
}




