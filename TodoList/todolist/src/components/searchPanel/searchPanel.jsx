import React, { Component } from 'react'
import './searchPanel.scss'


export default class SearchPanel extends Component {

    render() {
      return (
        <input type="search" className="main-search" placeholder="Search item"/>
      )
    }
}