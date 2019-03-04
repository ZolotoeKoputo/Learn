import React, { Component } from 'react'

import './todo-list-item.scss'

export default class TodoListItem extends Component {

    constructor() {
        super()
        this.onLabelClick = () => {
            console.log(`Done: ${this.data}`)
        }
    }
    


    render() {
        const  {data} = this.props
        return (
            <li className="list-group-item" onClick={ this.onLabelClick }>{data}</li>
            
        )
    }
}