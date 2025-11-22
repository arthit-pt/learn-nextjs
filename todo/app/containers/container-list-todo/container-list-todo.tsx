"use client";

// components
import ListItemTodo from "@/app/components/list-item-todo";
import useTodo from "@/app/hooks/use-todo";

export default function ContainerListTodo() {
  const { handleDeleteTodo, todos } = useTodo();

  return (
    <ol className="list-decimal mt-4 ml-6">
      {todos.list?.map((todo, index) => (
        <ListItemTodo
          key={index}
          text={todo}
          handleDeleteTodo={() => handleDeleteTodo(index)}
        />
      ))}
    </ol>
  );
}
