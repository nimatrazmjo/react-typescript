import React from 'react';

const EventComponent: React.FC = () => {

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        
    }

    const drag = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event.clientX);
    }
    return (
        <div className="event-component">
            <input type="text" name="change" id="change" onChange={changeHandler} />
            <div  draggable onDragStart={drag} className="drag-me">
                Drag Me
            </div>
        </div>
    )
}

export default EventComponent;