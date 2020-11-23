import React from 'react'
function MainLayout(props) {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

export default MainLayout