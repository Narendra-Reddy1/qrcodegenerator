import React from 'react'

export default function UrlField({ setUrl }) {
    return (
        <>
            <h3>URL QR Generator</h3>
            <div className='input'>
                <input type="url" placeholder='Enter URL here'
                    onChange={(e) => setUrl(e.target.value)} />
            </div>
        </>
    )
}
