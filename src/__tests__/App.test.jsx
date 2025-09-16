import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

describe('To-do App', () => {
  test('renders header', () => {
    render(<App />)
    expect(screen.getByText(/Today/i)).toBeInTheDocument()
  })

  test('can add a new task', () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/Task title/i)
    const addButton = screen.getByText(/Add Task/i)

    fireEvent.change(input, { target: { value: 'My First Task' } })
    fireEvent.click(addButton)

    expect(screen.getByText('My First Task')).toBeInTheDocument()
  })

  test('can mark task as done/undone', () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/Task title/i)
    fireEvent.change(input, { target: { value: 'Check me' } })
    fireEvent.click(screen.getByText(/Add Task/i))

    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)

    expect(checkbox.checked).toBe(true)

    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(false)
  })

  test('selecting a task shows details panel', () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/Task title/i)
    fireEvent.change(input, { target: { value: 'Details Task' } })
    fireEvent.click(screen.getByText(/Add Task/i))

    fireEvent.click(screen.getByText('Details Task'))

    expect(screen.getByText(/Save Changes/i)).toBeInTheDocument()
  })
})
