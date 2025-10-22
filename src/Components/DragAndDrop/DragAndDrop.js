import React, { useState, useRef } from "react";

const initialColumns = {
  todo: {
    name: "To do",
    items: [
      { id: "item-1", content: "Item 1" },
      { id: "item-2", content: "Item 2" },
    ],
  },
  "in-progress": {
    name: "In Progress",
    items: [{ id: "item-3", content: "Item 3" }],
  },
  done: {
    name: "Done",
    items: [],
  },
};

const DragAndDrop = () => {
  const [columns, setColumns] = useState(initialColumns);
  const dragItem = useRef();
  const dragNode = useRef();

  // When drag starts, store origin info
  const handleDragStart = (e, params) => {
    dragItem.current = params;
    dragNode.current = e.target;
    e.dataTransfer.effectAllowed = "move";
    setTimeout(() => {
      e.target.classList.add("dragging");
    }, 0);
  };

  // When dragging over a column or item
  const handleDragEnter = (e, params) => {
    if (!dragItem.current) return;
    if (
      params.colId === dragItem.current.colId &&
      params.itemIdx === dragItem.current.itemIdx
    )
      return;

    setColumns((oldCols) => {
      const newCols = JSON.parse(JSON.stringify(oldCols)); // deep copy

      // Remove the dragged item
      const draggedItem = newCols[dragItem.current.colId].items.splice(
        dragItem.current.itemIdx,
        1
      )[0];
      // Insert item into new location
      if (typeof params.itemIdx === "number") {
        newCols[params.colId].items.splice(params.itemIdx, 0, draggedItem);
        dragItem.current = { colId: params.colId, itemIdx: params.itemIdx };
      } else {
        // If dropping into blank column area, add to end
        newCols[params.colId].items.push(draggedItem);
        dragItem.current = {
          colId: params.colId,
          itemIdx: newCols[params.colId].items.length - 1,
        };
      }
      return newCols;
    });
  };

  // End drag/drop, cleanup
  const handleDragEnd = (e) => {
    setTimeout(() => {
      const list = document.querySelectorAll(".dragging");
      list.forEach((el) => el.classList.remove("dragging"));
    }, 0);
    dragItem.current = null;
    dragNode.current = null;
  };

  // Prevent default to allow drop
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ display: "flex", gap: 24, marginTop: 20 }}>
      {Object.entries(columns).map(([colId, column]) => (
        <div
          key={colId}
          style={{
            minWidth: 250,
            background: "#ececec",
            borderRadius: 6,
            padding: 16,
          }}
        >
          <h3>{column.name}</h3>
          <div
            onDragOver={handleDragOver}
            onDrop={(e) => handleDragEnter(e, { colId })}
            style={{ minHeight: 50 }}
          >
            {column.items.map((item, idx) => {
              // Safe opacity check, do not use this.target!
              let itemOpacity = 1;
              if (
                dragNode.current &&
                dragNode.current ===
                  document.querySelector(`[data-dnd-id="${item.id}"]`)
              ) {
                itemOpacity = 0.5;
              }
              return (
                <div
                  key={item.id}
                  draggable
                  onDragStart={(e) =>
                    handleDragStart(e, { colId, itemIdx: idx })
                  }
                  onDragEnter={(e) =>
                    handleDragEnter(e, { colId, itemIdx: idx })
                  }
                  onDragEnd={handleDragEnd}
                  onDragOver={handleDragOver}
                  data-dnd-id={item.id}
                  style={{
                    userSelect: "none",
                    padding: 12,
                    margin: "0 0 8px 0",
                    background: "#fff",
                    borderRadius: 4,
                    boxShadow: "0 1px 4px #0001",
                    cursor: "grab",
                    opacity: itemOpacity,
                  }}
                >
                  {item.content}
                </div>
              );
            })}
            {/* Placeholder at end of column for drop target */}
            <div
              style={{ minHeight: 20 }}
              onDragEnter={(e) => handleDragEnter(e, { colId })}
              onDragOver={handleDragOver}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DragAndDrop;
