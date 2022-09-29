import React, { useCallback, useMemo, useState } from "react";
import { Tabs } from "antd-mobile"
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
    const [activeIndex, setActiveIndex] = useState(0)
    const handleTabChange = useCallback((key) => {
        setActiveId(key)
        const index = tabs.findIndex(v => v.id === Number(key))
        console.log(index, tabs, key)
        if (index > -1) {
            setActiveIndex(index)
        }
    }, [tabs])
    return (
        <div
            className='tab-container'
            onClick={handleSelect}
        >
            <Tabs onChange={handleTabChange} defaultActiveKey={activeId}>
                {
                    tabs.map((itm) => {
                        return (
                            <Tabs.Tab title={itm.value} key={itm.id}></Tabs.Tab>
                        )
                    })
                }
            </Tabs>
            <img className="tab-img" src={item.imgs[activeIndex]} />
        </div>
    )
}

export default Tab