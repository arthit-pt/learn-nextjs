"use client";

// components
import Input from "@/app/components/input";

// hooks
import useTodo from "@/app/hooks/use-todo";

export default function ContainerInputTodo() {
  const { handleAddTodo, todos, handleChangeTodo } = useTodo();

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <Input value={todos.text} onChange={handleChangeTodo} />
      </form>
    </div>
  );
}
