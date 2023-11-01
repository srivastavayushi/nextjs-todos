'use server'

import prisma from './prisma'

export async function getTodos() {
  try {
    const todos = await prisma.todo.findMany()
    return { todos }
  } catch (error) {
    return { error }
  }
}

export async function addTodos(title: string) {
  console.log(title)
  try {
    const Todo = await prisma.todo.create({
      data: { title }
    })
    return { Todo }
  } catch (error) {
    console.log(error)
    return { error }
  }
}
