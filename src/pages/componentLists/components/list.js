import React from "react";
import { useDrag } from 'react-dnd'
function List({ item }) {
    const [{ isDragging }, drag] = useDrag(
        {
          item: { comp: item, originalIndex: -1 },
          type: 'comp',
          end: (i, monitor) => {
            if (monitor.didDrop()) {
                console.log('useDrag', i, monitor)
              i.originalIndex = -1
            }
          },
          collect: (monitor) => ({
            isDragging: monitor.isDragging(),
          }),
        },
        [],
      );
    return (
        <div ref={drag} className="component-list">
            <i className="component-list-icon" style={{ backgroundImage: `url(${item.icon})` }} />
            <span>{item.text}</span>
        </div>
    )
}

export default List