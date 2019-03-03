import React, { Component } from 'react'

import './todoListItem.scss'

export default class TodoListItem extends Component {

    render() {
        const  {data} = this.props
        return (
            <li className="list-group-item">{data}</li>
            
        )
    }
}