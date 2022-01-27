import React from 'react'

const TextSideComponent = (props) => {
    return (
        <>
        <div className="left-right-wrapper">
            <div className="left-side-content">
                { props.leftSide }
            </div>
            <aside className="right-side-content">
                { props.rightSide }
            </aside>
        </div>
        </>
    )
}

export default TextSideComponent;
