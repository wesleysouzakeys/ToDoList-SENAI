import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header'
import ToDoList from './components/ToDoList/ToDoList'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
      <Header />
      <ToDoList />
    </main>
  </React.StrictMode>,
)
