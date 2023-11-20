import { useSuspenseQuery } from '@tanstack/react-query';

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const todoKeys = {
  all: ['todos'] as const,
};

export const getTodos = async (): Promise<TodoType[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  });

  const data = await response.json();

  if (!response.ok) {
    if (data.message) {
      throw new Error(data.message);
    }

    throw new Error('알 수 없는 에러');
  }

  return data;
};

export const useGetTodos = () => {
  return useSuspenseQuery({ queryKey: [todoKeys.all], queryFn: getTodos });
};
