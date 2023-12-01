import {useStore} from "./store/store.ts";
import {ChangeEvent, useState} from "react";

export const Todolist = () => {
	const { todos, addTodo, deleteTodos} = useStore();
	const [value, setValue] = useState<string>("")
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=>{
		setValue(e.currentTarget.value)
	}
	const addTodoHandler = ()=>{
		addTodo(value)
		setValue("")
	}
	const deleteTodoHandler = ()=>{
		deleteTodos()
	}
	return (
		<main>
			<h2>
				<ul>
					{todos.map(el=> <li>{el}</li>)}
				</ul>
			</h2>
			<div className='btn-box'>
				<div>
					<input value={value} onChange={onChangeHandler}/>
				</div>
				<div>
					<button onClick={addTodoHandler} className='btn reset'>
						Add New TodoList
					</button>
					<button onClick={deleteTodoHandler} className='btn reset'>
						Delete all Todolists
					</button>
				</div>

			</div>
		</main>
	);
};