import React, { useState } from "react";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Preview from "./preview";
import ComponentLists from "./componentLists"
import Editor from "./editor";
import './index.less'
import 'antd/dist/antd.css';
// import 'antd-mobile-v2/dist/antd-mobile.css';
function Main() {
    const [currentIndex, setCurrentIndex] = useState()
    const [selectComponents, setSelectComponents] = useState([])
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="main">
                <ComponentLists setCurrentIndex={setCurrentIndex} />
                <Preview currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} selectComponents={selectComponents} setSelectComponents={setSelectComponents} />
                <Editor currentIndex={currentIndex} selectComponents={selectComponents} setSelectComponents={setSelectComponents} />
            </div>
        </DndProvider>
    )
}
export default Main