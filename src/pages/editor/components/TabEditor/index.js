import React, { useState } from "react";
import { Input, Upload } from 'antd'
function TabEditor({ currentIndex, selectComponents, setSelectComponents }) {
    const onChange = ({ fileList: newFileList }, item) => {
        item.fileList = newFileList.map((v) => ({
            ...v,
            url: v.thumbUrl
        }))
        selectComponents
        console.log(selectComponents)
        setSelectComponents([...selectComponents])
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    return (
        <div className="tab-editor">
            {
                selectComponents[currentIndex]?.config && selectComponents[currentIndex]?.config.map((item, index) => {
                    return (
                        <>
                            {
                                item.type === 'input' && (
                                    <div className='editor-label' key={`tab-editor-${index}`}>
                                        <span>{item.label}</span>
                                        <Input
                                            placeholder='请输入内容'
                                            value={item.value}
                                            onChange={(e) => {
                                                const copyCards = JSON.parse(JSON.stringify(selectComponents))
                                                copyCards[currentIndex].config[index].value = e.target.value
                                                copyCards[currentIndex].value[index] = e.target.value
                                                setSelectComponents(copyCards)
                                            }} />
                                    </div>
                                ) ||
                                item.type === 'upload' && (
                                    <div className='editor-label' key={`tab-editor-${index}`}>
                                        <span>{item.label}</span>
                                        <Upload
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            listType="picture-card"
                                            fileList={item.fileList}
                                            onChange={(e) => onChange(e, item)}
                                            onPreview={onPreview}
                                        >
                                            {item.fileList.length < 1 && '+ Upload'}
                                        </Upload>
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