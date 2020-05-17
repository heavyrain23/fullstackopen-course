import React from 'react'

const Notification = ({notification}) => {
    const message = notification.message
    const type = notification.type

    if(message === null) {
        return null
    }

    const baseStyle = {
        background: 'white',
		fontSize: '20px',
		borderStyle: 'solid',
		borderRadius: '5px',
		padding: '10px',
        marginBottom: '10px',
        width: '200px'
    }

    let notificationStyle = null;
    if(type === 'error') {
        notificationStyle = {...baseStyle, color: 'red' }
    }else{
        notificationStyle = {...baseStyle, color: 'green'}
    }

    return (
        <div style = {notificationStyle}>
            {message}
        </div>
    )
}

export default Notification