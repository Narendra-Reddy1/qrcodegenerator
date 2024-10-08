
import React, { useEffect, useState } from 'react'

export default function ListItem({ iconUrl, onClick, isSelected, label, toolTipText, extraClass = "", extraId = "" }) {

    const [isHovered, setHovered] = useState(false);
    const [isCooling, setIsCooling] = useState(false)
    return (
        <button
            className={`option ${isSelected ? 'selected' : ''} ${extraClass}`}
            id={`${extraId}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => {
                if (isCooling) return;
                setIsCooling(true)
                setTimeout(() => {
                    setIsCooling(false)
                }, 1000)
                onClick && onClick()
            }}>
            {iconUrl && <img src={iconUrl} alt={label} style={{ width: 25, }} />}
            <span >{label}</span>
            {isHovered && toolTipText && <div className='tooltip'>{toolTipText}</div>}
        </button>
    )
}



