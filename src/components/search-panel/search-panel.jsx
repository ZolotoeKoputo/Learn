import React, { Component } from 'react'
import './search-panel.scss'


export default class SearchPanel extends Component {

    render() {
      return (
        <input type="search" className="main-search" placeholder="Search item"/>
      )
    }
}