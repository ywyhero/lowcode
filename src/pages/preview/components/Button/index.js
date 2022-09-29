import React, { useCallback, useMemo } from "react";
import './index.less'
function Button({ item, setCurrentIndex, index }) {
    const style = useMemo(() => {
        let result = {}

        item?.config.forEach((_item) => {
            if (_item.style) {
                result[_item.style] = `${_item.value}px`
            }
        })
        return result
    }, [item.config])
    const handleSelect = useCallback(() => {
        setCurrentIndex(index)
    }, [index])
    return (
        <div
            className='button-container'
            onClick={handleSelect}
        >
            <span className='button-text' style={style}>{item.value}</span>
        </div>
    )
}

export default Button