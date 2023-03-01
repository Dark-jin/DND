import { Droppable } from "react-beautiful-dnd";
import { Item } from "../models/Item";
import TodoItem from "./TodoItem";
import React from "react";
import { Stack } from "@mui/material";

interface Props {
  items: Item[];
  setItems: (s: Item[]) => void;
  inProgressTodos: Item[];
  setInProgressTodos: (s: Item[]) => void;
  completedTodos: Item[];
  setCompletedTodos: (s: Item[]) => void;
}

const TodoList: React.FC<Props> = ({
  items,
  setItems,
  inProgressTodos,
  setInProgressTodos,
  completedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <div>
      <Stack direction="row" spacing={4}>
        <div>
          <h2>MenuList 1</h2>
          <Droppable droppableId="inbox-column">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <ul className="list-none">
                  {items.length === 0 ? (
                    <p>No Item</p>
                  ) : (
                    items.map((item, index) => (
                      <TodoItem
                        index={index}
                        item={item}
                        key={item.id}
                        items={items}
                        inbox={items}
                        setItems={setItems}
                        completed={completedTodos}
                        setCompleted={setCompletedTodos}
                      />
                    ))
                  )}
                  {provided.placeholder}
                </ul>
              </div>
            )}
          </Droppable>
        </div>
        <div>
          <h2>MenuList 2</h2>
          <Droppable droppableId="inprogress-column">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <ul className="list-none">
                  {inProgressTodos.length === 0 ? (
                    <p>No Item</p>
                  ) : (
                    inProgressTodos.map((item, index) => (
                      <TodoItem
                        index={index}
                        item={item}
                        key={item.id}
                        items={inProgressTodos}
                        inbox={items}
                        setItems={setInProgressTodos}
                        completed={completedTodos}
                        setCompleted={setCompletedTodos}
                      />
                    ))
                  )}
                  {provided.placeholder}
                </ul>
              </div>
            )}
          </Droppable>
        </div>
        <div>
          <h2>MenuList 3</h2>
          <Droppable droppableId="completed-column">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <ul className="list-none">
                  {completedTodos.length === 0 ? (
                    <p>No Item</p>
                  ) : (
                    completedTodos.map((item, index) => (
                      <TodoItem
                        index={index}
                        item={item}
                        key={item.id}
                        items={completedTodos}
                        inbox={items}
                        setItems={setCompletedTodos}
                        completed={completedTodos}
                        setCompleted={setCompletedTodos}
                      />
                    ))
                  )}
                  {provided.placeholder}
                </ul>
              </div>
            )}
          </Droppable>
        </div>
      </Stack>
    </div>
  );
};
export default TodoList;
