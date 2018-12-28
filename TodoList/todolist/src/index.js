import  React, { Component }  from 'react'
import  ReactDOM from 'react-dom'

import AppHeader from './components/appHeader'
import TodoList from './components/todoList'
// import ItemStatusFilter from './components/itemStatusFilter'
// import TodoListItem from './components/todoListItem'

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