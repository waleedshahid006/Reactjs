import React from 'react'

const Contact = (props) => {
     setTimeout (() => {
        props.history.push('/about')
    } , 2000);

    return (
        <div className="container">
            <h2 className="center">Contacttttttt</h2>
            <p>I"M PARAGRAPHHHHHHH of contact HELLOOO HYYY</p>
        </div>
    )
}

export default Contact