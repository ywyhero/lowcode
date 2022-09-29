import React from "react";
import SelectComponent from './components/selectComponent'
import EmptyComponent from './components/emptyComponent'
import './index.less'
function Preview({ currentIndex, selectComponents, setSelectComponents, setCurrentIndex }) {
    return (
        <div className="preview">
            {
                selectComponents.length > 0 ? selectComponents.map((item, index) => {
                    return (
                        <SelectComponent
                            key={index}
                            IDkey={`selectComponent-${index}`}
                            index={index}
                            item={item}
                            currentIndex={currentIndex}
                            selectComponents={selectComponents}
                            setCurrentIndex={setCurrentIndex}
                            setSelectComponents={setSelectComponents} />
                    )
                }) : (
                    <EmptyComponent
                        key={-1}
                        setSelectComponents={setSelectComponents}
                        setCurrentIndex={setCurrentIndex}
                    />
                )
            }
        </div>

    )
}
export default Preview