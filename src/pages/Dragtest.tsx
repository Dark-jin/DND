import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";

const data = [
  {
    id: "1",
    text: "first",
  },
  {
    id: "2",
    text: "second",
  },
  {
    id: "3",
    text: "third",
  },
  {
    id: "4",
    text: "원숭이",
  },
  {
    id: "5",
    text: "코끼리",
  },
];

const Dragtest = () => {
  const [testState, setTestState] = useState(data);

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(testState);
    const [reorderedData] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedData);

    setTestState(items);
  };
  return (
    <div className="text-center">
      <h1>react-beautiful-dnd Demo</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="first-box">
          {(provided) => (
            <ul
              className="list-none w-96"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {testState.map(({ id, text }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li
                        className="list-none align-middle border-solid mt-5 pb-4 pt-4"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {text}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
export default Dragtest;
