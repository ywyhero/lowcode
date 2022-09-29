import React from "react";
import { Input, InputNumber } from 'antd'
function ButtonEditor({ currentIndex, selectComponents, setSelectComponents }) {
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
                                ) || 
                                item.type === 'inputNumber' && (
                                    <div className='editor-label' key={`button-editor-${index}`}>
                                        <span className="editor-label-val">{item.label}</span>
                                        <InputNumber
                                            placeholder='请输入内容'
                                            value={item.value}
                                            onChange={(value) => {
                                                const copyCards = JSON.parse(JSON.stringify(selectComponents))
                                                copyCards[currentIndex].config[index].value = value
                                                setSelectComponents((list) => {
                                                    list[currentIndex].config = copyCards[currentIndex].config
                                                    return [...list]
                                                })
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
export default ButtonEditor