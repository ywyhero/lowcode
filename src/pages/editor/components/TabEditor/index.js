import React, { useState } from "react";
import { Input, Upload } from 'antd'
function TabEditor({ currentIndex, selectComponents, setSelectComponents }) {
    const onChange = ({ fileList: newFileList }, index, itm, idx) => {
        console.log('newFileList', newFileList,selectComponents, index, itm, idx)
        itm.fileList = newFileList.map((v) => ({
            ...v,
            url: v.response?.url
        }))
        selectComponents[currentIndex].imgs[idx] = newFileList[0]?.response?.url || ''
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
                                item.type === 'text' && item.lists.map((itm, idx) => (
                                    <div className='editor-label' key={`tab-editor-${idx}`}>
                                        <span>{itm.label}</span>
                                        <Input
                                            placeholder='请输入内容'
                                            value={itm.value}
                                            onChange={(e) => {
                                                const copyCards = JSON.parse(JSON.stringify(selectComponents))
                                                copyCards[currentIndex].config[index].lists[idx].value = e.target.value
                                                copyCards[currentIndex].value[idx] = e.target.value
                                                setSelectComponents(copyCards)
                                            }} />
                                    </div>
                                ))  ||
                                item.type === 'upload' && item.lists.map((itm, idx) => (
                                    <div className='editor-label' key={`tab-editor-${idx}`}>
                                        <span>{itm.label}</span>
                                        <Upload
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            listType="picture-card"
                                            fileList={itm.fileList}
                                            onChange={(e) => onChange(e, index, itm, idx)}
                                            onPreview={onPreview}
                                        >
                                            {itm.fileList.length < 1 && '+ Upload'}
                                        </Upload>
                                    </div>
                                ))
                            }
                        </>
                    )
                })
            }
        </div>
    )
}
export default TabEditor