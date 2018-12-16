import React, { Component } from 'react'

import './todoList.scss'

export default class TodoList extends Component {

    render() {
      return (
        <section className="section section-list my-3">
            <div className="container">
                <ul className="list-group">
                    <li className="list-group-item">Drink Tea</li>
                    <li className="list-group-item">Create first project</li>
                    <li className="list-group-item">Sleep</li>
                </ul>
            </div>
        </section>
      )
    }
}