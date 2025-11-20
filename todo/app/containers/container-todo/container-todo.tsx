"use client";

// components
import Input from "@/app/components/input";
import ListItemTodo from "@/app/components/list-item-todo";
import useTodo from "@/app/hooks/use-todo";

export default function ContainerTodo() {
  const { handleAddTodo, todos, handleChangeTodo, handleDeleteTodo } =
    useTodo();

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <Input value={todos.text} onChange={handleChangeTodo} />
      </form>

      <ol className="list-decimal mt-4 ml-6">
        {todos.list?.map((todo, index) => (
          <ListItemTodo
            key={index}
            text={todo}
            handleDeleteTodo={() => handleDeleteTodo(index)}
          />
        ))}
      </ol>
    </div>
  );
}
