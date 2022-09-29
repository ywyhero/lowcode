import React from "react";
import { Input } from 'antd'
function TabEditor({ currentIndex, selectComponents, setSelectComponents }) {
    return (
        <div className="button-editor">
            {
                selectComponents[currentIndex]?.config.map((item, index) => {
                    return (
                        <>
                            {
                                item.type === 'input' && (
                                    <div className='editor-label' key={`button-editor-${index}`}>
                                        <span>{item.label}</span>
                                        <Input
                                            placeholder='请输入内容'
                                            value={item.value}
                                            onChange={(e) => {
                                                const copyCards = JSON.parse(JSON.stringify(selectComponents))
                                                copyCards[currentIndex].config[index].value = e.target.value
                                                copyCards[currentIndex].value = e.target.value
                                                setSelectComponents(copyCards)
                                            }} />
                                    </div>
                                )
                            }
                        </>
                    )
                })
            }
        </div>
    )
}
export default TabEditor