import create from 'zustand'
import {persist} from 'zustand/middleware'


type StateType = {
	todos: string[]
	addTodo: (newTodo: string) => void
	deleteTodos: () => void
}

export const useStore = create<StateType>()(persist(
	(set, get) => ({
		todos: [],
		addTodo(newTodo) {
			const newTodos = [...get().todos, newTodo]
			set({todos: newTodos})
		},
		deleteTodos() {
			set({todos: []})
		},
	}), {
		name: "todos-storage",
		getStorage: () => sessionStorage
	}))