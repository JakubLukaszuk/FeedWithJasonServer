import React from 'react'

function MainLayout(props) {
    const children = {props}
    return (
        <div>
            {props.children}
        </div>
    )
}

export default MainLayout
