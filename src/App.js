import { useContext, useState } from 'react'
// import { useEffect } from 'react'
import './App.css'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import AuthContext from './components/store/AuthContext'
function App() {
const ctxData = useContext(AuthContext)

	return (
		<div className='App'>
				<TodoAdd  />
				<TodoList />
		</div>
	)
}

export default App
