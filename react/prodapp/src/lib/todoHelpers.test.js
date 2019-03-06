import { addTodo } from './todoHelpers';
/*
TEST STRUCTURE: ARRANGE, ACT, ASSERT
*/

test('addTodo should add the passed todo to the list', () => {
  // ARRANGE
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
  ]
  const newTodo = { id: 3, name: 'three', isComplete: false }
  const expected = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false },
  ]

  // ACT
  const result = addTodo(startTodos, newTodo);
  // ASSERT
  expect(result).toEqual(expected);
})

test('addTodo should not mutate the existing todo array', () => {
  // ARRANGE
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false }
  ]
  const newTodo = { id: 3, name: 'three', isComplete: false }
  const expected = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ]
  // ACT
  const result = addTodo(startTodos, newTodo)
  // ASSERT
  expect(result).not.toBe(startTodos)

})