"use client";

import { useCallback } from "react";
import { useImmer } from "use-immer";

import type { FormEvent } from "react";
import Input from "@/app/components/input";

export default function ContainerTodo() {
  const [todos, setTodos] = useImmer({
    text: "",
    list: [] as string[],
  });

  const handleChangeTodo = useCallback(
    (value: string) => {
      setTodos((draft) => {
        draft.text = value;
      });
    },
    [setTodos]
  );

  const handleAddTodo = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setTodos((draft) => {
        if (draft.text.trim() === "") return;
        draft.list.push(draft.text);
        draft.text = "";
      });
    },
    [setTodos]
  );

  const handleDeleteTodo = useCallback(
    (index: number) => {
      setTodos((draft) => {
        draft.list.splice(index, 1);
      });
    },
    [setTodos]
  );

  console.log("ContainerTodo Render");

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <Input value={todos.text} onChange={handleChangeTodo} />
      </form>

      <ol className="list-decimal mt-4 ml-6">
        {todos.list?.map((todo, index) => (
          <li key={index} className="mb-2">
            <div className="flex gap-6">
              <div className="w-lg">{todo}</div>
              <button
                onClick={() => handleDeleteTodo(index)}
                className="bg-red-500 rounded text-white px-2 py-1"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
