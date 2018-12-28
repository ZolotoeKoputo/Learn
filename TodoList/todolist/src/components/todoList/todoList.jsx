import React, { Component } from 'react'
import TodoListItem from '../todoListItem'

import './todoList.scss'

export default class TodoList extends Component {

    render() {
      return (
        <section className="section section-list my-3">
            <div className="container">
                <ul className="list-group">
                    <TodoListItem />
                </ul>
            </div>
        </section>
      )
    }
}