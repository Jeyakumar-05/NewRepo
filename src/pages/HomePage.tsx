import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { increment, decrement } from '../store/slices/counterSlice'

const HomePage = () => {
  const [name, setName] = useState('')
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()
  
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Modern React App</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A production-ready template with React, TypeScript, Redux Toolkit, React Router, and Tailwind CSS.
        </p>
      </section>
      
      <section className="max-w-md mx-auto bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Interactive Demo</h2>
        
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          {name && (
            <p className="mt-2 text-green-600 dark:text-green-400">
              Hello, {name}!
            </p>
          )}
        </div>
        
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Decrement
          </button>
          <span className="text-2xl font-bold">{count}</span>
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Increment
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage