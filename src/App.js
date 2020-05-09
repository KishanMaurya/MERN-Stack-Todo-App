import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Route , Link } from "react-router-dom";

import CreateTodo from  './components/create-todos-component';
import EditTodo from './components/edit-todo-component';
import TodosList from './components/todos-list-component';
import DeleteTodo from './components/delete-todo-component';

import logo from './logo.svg';

class App extends Component{
  render(){
    return (
      <Router>
        <div className="container">
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a href='https://github.com/KishanMaurya' className='navbar-brand' target='_blank' rel='noopener noreferrer'>
              <img src={logo} width='40' height='40' alt='kishan'></img>
            </a>
            <Link to='/' className='navbar-brand font-weight-bold text-primary'>Mearn-Stack Todo-App</Link>

            <button className='navbar-toggler' 
              type='button' data-toggle='collapse' 
              data-target='#react'>
            <span className='navbar-toggler-icon'></span>
            </button>
            
            <div className='collapse navbar-collapse' id='react'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item active'>
                  <Link to='/' className='nav-link'>TodosList</Link>
                </li>
                <li className='nav-item '>
                  <Link to='/create' className='nav-link'>CreatTodos</Link>
                </li>
                <li className='nav-item '>
                  <Link to='/edit/id' className='nav-link'>EditTodos</Link>
                </li>
                <li className='nav-item '>
                  <Link to='/delete/id' className='nav-link'>DeleteTodos</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Route path='/' exact component={TodosList}></Route>
        <Route path='/edit/:id' component={EditTodo}></Route>
        <Route path='/create' component={CreateTodo}></Route>
        <Route path='/delete/:id' component={DeleteTodo}></Route>
      </Router>
      
    );
  }
}

export default App;
