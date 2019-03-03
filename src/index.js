import  React, { Component }  from 'react'
import  ReactDOM from 'react-dom'

import AppHeader from './components/app-header'
import TodoList from './components/todo-list'
// import ItemStatusFilter from './components/item-status-filter'
// import TodoListItem from './components/todo-list-item'

class App extends Component {

    state() {
        
    }

    render() {
        return(
            <div className="page-wrapper">
                <AppHeader />
                <TodoList />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))