import React, { useRef, useCallback } from "react";
import { useDrag, useDrop } from 'react-dnd'
import classnames from 'classnames'
import Button from "./Button";
import Tab from "./Tab";
function SelectComponent({ item, IDkey, currentIndex, index, setSelectComponents, setCurrentIndex }) {
    const ref = useRef(null)
    const [{ handlerId }, drop] = useDrop({
        accept: 'comp',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.originalIndex
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()

            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            console.log('hover', item.originalIndex)
            if (item.originalIndex !== -1) {
                setSelectComponents((prevCards) => {
                    const copyCards = JSON.parse(JSON.stringify(prevCards))
                    copyCards.splice(dragIndex, 1)
                    copyCards.splice(hoverIndex, 0, prevCards[dragIndex])
                    return copyCards
                })
            } else {
                setSelectComponents((prevCards) => {
                    const copyCards = JSON.parse(JSON.stringify(prevCards))
                    copyCards.splice(hoverIndex, 0, item.comp)
                    return copyCards
                })
            }
            item.originalIndex = hoverIndex
            setCurrentIndex(hoverIndex)
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: 'comp',
        item: () => {
            return { comp: item, originalIndex: index }
        },
        isDragging: (monitor) => {
            return `selectComponent-${monitor.getItem().originalIndex}` === IDkey
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const opacity = isDragging ? 0 : 1
    drag(drop(ref))
    const handleDeletComponent = useCallback(() => {
        setSelectComponents((lists) => {
            const copyLists = JSON.parse(JSON.stringify(lists))
            copyLists.splice(currentIndex, 1)
            return copyLists
        })
        setCurrentIndex(0)
    }, [currentIndex])
    return (
        <div
            ref={ref}
            key={index}
            style={{
                opacity,
                border: '1px solid #blue'
            }}
            className={classnames('selectComponent-container', {
                'active': currentIndex === index
            })}
            data-handler-id={handlerId}
        >
            {item.type === 'button' && (
                <Button item={item} index={index} setCurrentIndex={setCurrentIndex}></Button>
            )}
            {item.type === 'tab' && (
                <Tab item={item} index={index} setCurrentIndex={setCurrentIndex} />
            )}
            <span className="selectComponent-delete" onClick={handleDeletComponent}>删除</span>
        </div>
    )
}
export default SelectComponent