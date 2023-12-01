import create from 'zustand'
import {persist} from 'zustand/middleware'


type StateType = {
	todos: string[]
	addTodo: (newTodo: string) => void
	deleteTodos: () => void
}

type CounterStoreType = {
	count: number,
	increment: () => void
	decrement: () => void
	reset: () => void
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

export const useCounterStore = create<CounterStoreType>()((set) => ({
	count: 0,
	increment: () => set((state) => ({ count: state.count + 1 })),
	decrement: () => set((state) => ({ count: state.count - 1 })),
	reset: () => set({ count: 0 })
}));