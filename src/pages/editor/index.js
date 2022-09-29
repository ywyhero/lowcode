import React from "react";
import ButtonEditor from './components/ButtonEditor'
import TabEditor from './components/TabEditor'
import './index.less'
function Editor({ currentIndex, selectComponents, setSelectComponents }) {
    return (
        <div className="editor">
            {
                selectComponents[currentIndex]?.type === 'button' && (
                    <ButtonEditor
                        currentIndex={currentIndex}
                        selectComponents={selectComponents}
                        setSelectComponents={setSelectComponents}
                    />
                )
            }
            {
                selectComponents[currentIndex]?.type === 'tab' && (
                    <TabEditor
                        currentIndex={currentIndex}
                        selectComponents={selectComponents}
                        setSelectComponents={setSelectComponents}
                    />
                )
            }
        </div>
    )
}
export default Editor