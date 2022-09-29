import React, { useCallback, useMemo, useState } from "react";
import './index.less'
function Tab({ item, setCurrentIndex, index }) {
    const handleSelect = useCallback(() => {
        setCurrentIndex(index)
    }, [index])
    const tabs = useMemo(() => {
        const arr = []
        for (let i = 0; i < item.value.length; i++) {
            const obj = {
                id: i + 1,
                value: item.value[i]
            }
            arr.push(obj)
        }
        return arr
    }, [item])
    const [activeId, setActiveId] = useState(1)
    const handleTabChange = useCallback((itm) => {
        setActiveId(itm.id)
    }, [])
    return (
        <div
            className='tab-container'
            onClick={handleSelect}
        >
            <div className="tab-lists">
                {
                    tabs.map((itm) => {
                        return (
                            <span
                                onClick={() => handleTabChange(itm)}
                                className={`tab-text ${itm.id === activeId ? 'active' : ''}`}>
                                {itm.value}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tab