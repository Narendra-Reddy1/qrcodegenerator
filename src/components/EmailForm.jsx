import React from 'react'

function EmailForm() {
    return (
        <>
            <h3>Email QR Code</h3>
            <div className="inputs">
                <div className="input-group">
                    {/* <label htmlFor="email">Email:</label> */}
                    <input type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="input-group">
                    {/* <label htmlFor="subject">Subject:</label> */}
                    <input type="text" id="subject" placeholder="Enter your subject" />
                </div>
                <div className="input-group">
                    {/* <label htmlFor="message">Message:</label> */}
                    <input type="text" id="message" placeholder="Enter your message" />
                </div>
            </div>
        </>

    )
}

export default EmailForm