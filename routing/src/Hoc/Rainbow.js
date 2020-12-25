import React from 'react'

const Rainbow = (WrappedComponent) => {

    const colours = ['red' , 'blue' , 'pink' , 'orange' ,  'purple' , 'yellow' , 'brown'];
    const RC = colours[Math.floor(Math.random() * 6)]
    const className = RC + '-text';

    return (props) => {
        return (
            <div className = {className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}
export default Rainbow
