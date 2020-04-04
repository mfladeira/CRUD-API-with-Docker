import './Main.css'
import React from 'react'
import Header from './Header'
export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="p-0 content container-fluid">
            <div className="p-3 m-0">{props.children}</div>
        </main>
    </React.Fragment>
