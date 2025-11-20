// components
import Button from "@/app/components/button/button";

// types
import type { ListItemTodoProps } from "./type";
import { memo } from "react";
function ListItemTodo({ text, handleDeleteTodo }: ListItemTodoProps) {
  console.log("Render:", text); // debug ดูว่า render กี่ครั้ง

  return (
    <li className="mb-2">
      <div className="flex gap-6">
        <div className="w-lg">{text}</div>
        <Button className="bg-red-500" onClick={handleDeleteTodo}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default memo(ListItemTodo);
