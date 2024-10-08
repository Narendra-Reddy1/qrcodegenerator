
import React, { useEffect, useState } from 'react'

export default function ListItem({ iconUrl, onClick, isSelected, label, toolTipText, extraClass = "", extraId = "" }) {

    const [isHovered, setHovered] = useState(false);
    return (
        <button
            className={`option ${isSelected ? 'selected' : ''} ${extraClass}`}
            id={`${extraId}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => {
                onClick && onClick()
            }}>
            {iconUrl && <img src={iconUrl} alt={label} style={{ width: 25, }} />}
            <span >{label}</span>
            {isHovered && toolTipText && <div className='tooltip'>{toolTipText}</div>}
        </button>
    )
}



