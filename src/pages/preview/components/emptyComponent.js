
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import classnames from 'classnames'

const EmptyComponent = ({ setSelectComponents, setCurrentIndex }) => {
  const ref = useRef(null)
  const [{ handlerId }, drop] = useDrop({
    accept: 'comp',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    drop: (item,monitor)=>{
      if (!ref.current) {
        return
      }
      setSelectComponents([item.comp])
      setCurrentIndex(0)
    }
  })

  drop(ref)

  return (
    <div
      ref={ref}
      className={classnames('empty-component-container')}
      data-handler-id={handlerId}
    >
      组件放置区
    </div>
  )
}

export default EmptyComponent
