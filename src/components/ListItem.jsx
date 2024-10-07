
import React, { useEffect, useState } from 'react'

export default function ListItem({ iconUrl, onClick, isSelected, label, toolTipText }) {

    const [isHovered, setHovered] = useState(false);
    return (
        <button className={`option ${isSelected ? 'selected' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => {
                onClick()
                console.log(isSelected, label)
            }}>
            {iconUrl && <img src={iconUrl} alt={label} style={{ width: 25, }} />}
            <span >{label}</span>
            {isHovered && toolTipText && <div className='tooltip'>{toolTipText}</div>}
        </button>
    )
}



