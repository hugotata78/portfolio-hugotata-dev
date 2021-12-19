import React from 'react'

export const ButtonUp = ({ buttonUp}) => {
    return (
        <div>
            <a href="#page-top" className={`${buttonUp} up`} title='Up'><i class="bi bi-arrow-up"></i></a>
        </div>
    )
}
