import React from 'react'
import './TodoList.css'
import { useContext } from 'react'
import AuthContext from './store/AuthContext'

const TodoList = () => {
	const ctxData = useContext(AuthContext)
	const deleteHandler = (e) => {
		ctxData.setData(ctxData.data.filter((el) => el.id !== e.target.id))
	}
	const checkHandler = (e) => {
		ctxData.setData(
			ctxData.data.map((el) => {
				if (el.id === e.target.id) {
					el.completed = !el.completed
				}
				return el
			}),
		)
	}

	return (
		<ul>
			{ctxData.data.map((el) => (
				<li className='list' key={el.id}>
					<div className={el.completed ? 'done' : 'task'}>
						<input
							type='checkbox'
							id={el.id}
							onChange={checkHandler}
							checked={el.completed}
						/>
						<p>{el.value}</p>
						{el.data}
					</div>
					<button className='btn' id={el.id} onClick={deleteHandler}>
						delete
					</button>
				</li>
			))}
		</ul>
	)
}

export default TodoList
