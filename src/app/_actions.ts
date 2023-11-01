import { addTodos } from '../../lib/todos'

export async function createTodoAction(title: string) {
  await addTodos(title)
}
