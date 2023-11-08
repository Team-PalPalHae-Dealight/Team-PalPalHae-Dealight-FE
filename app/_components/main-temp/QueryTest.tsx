'use client';

import { useGetTodos } from '@/app/_hooks/query/tempTodo';

const QueryTest = () => {
  const { data: todos } = useGetTodos();
  console.log(todos);

  return <div>query test</div>;
};

export default QueryTest;
