import React from 'react'

function EmailForm({ onEmailEntered, isValidEmail, setEmail, setSubject, setMessage, onSubmit }) {
    return (
        <>
            <div className='qr-container'>
                <h3>Email QR Code</h3>
            </div>
            <form onSubmit={(e) => {
                //e.preventDefault();
                onSubmit();
                onEmailEntered();
            }}>


                <div>
                    <div className="input-group">
                        {/* <label htmlFor="email">Email:</label> */}
                        <input type="email" id="email" placeholder="Enter your email"
                            onChange={(e) => {
                                setEmail(e.target.value)

                            }}
                            required
                        />
                        {!isValidEmail && <div className='tooltip'>{"Invalid Email Address"}</div>}
                    </div>
                    <div className="input-group">
                        {/* <label htmlFor="subject">Subject:</label> */}
                        <input type="text" id="subject" placeholder="Enter your subject"
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        {/* <label htmlFor="message">Message:</label> */}
                        <input type="text" id="message" placeholder="Enter your message"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>
            </form>
        </>

    )
}

export default EmailForm