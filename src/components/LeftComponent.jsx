import React, { createContext, useCallback, useLayoutEffect, useRef, useState } from 'react'
import ButtonGroup from './ButtonGroup'
import UrlField from './UrlField'
import ListItem from './ListItem'
import EmailForm from './EmailForm'
import QRCode from "qrcode"
const LeftComponent = ({ qrColor, setQrUrl }) => {
    const [currentBtn, setCurrentBtn] = useState("")
    const [url, setUrl] = useState("")
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [isEmailValid, setEmailValid] = useState(true)
    const [isShaking, setIsShaking] = useState(false);
    const formRef = useRef(null)

    const createQr = (content) => {
        const patternColor = qrColor;
        const bgColor = (patternColor == "#000000" ? "#FFFFFF" : "#000000")
        console.log(content)
        if (content)
            QRCode.toDataURL(content, {
                errorCorrectionLevel: 'H',
                type: 'image/png',
                width: 512,
                quality: 1,
                margin: 1,
                color: {
                    //dark: qrColor,//pattern color
                    //light: "#000" //background color
                    dark: patternColor,//pattern color
                    light: bgColor //background color
                }
            }, function (err, url) {
                if (err) {
                    console.log(err);
                    throw err;
                }
                var img = document.getElementById('qr');
                setQrUrl(url);
                img.src = url;
            })
    }

    const generateEmailQr = () => {
        const baseUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=';
        // Encode the subject and body to ensure special characters are handled correctly
        if (!email) return;
        const toAddress = encodeURIComponent(email);
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(message);
        const gmailUrl = `${baseUrl}${toAddress}&su=${encodedSubject}&body=${encodedBody}`;
        if (isValidEmail()) {

            createQr(gmailUrl);
        }
        else {
            // If email is invalid, trigger shake animation
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500); // Remove shake class after animation
            const msg = "Invalid Email"
            createQr(msg);
        }
        console.log("EMAIL.>>>> ", isEmailValid)
        //https://mail.google.com/mail/?view=cm&fs=1&to=narendrareddydasaganipalli%40gmail.com&su=Welcome&body=Hi+Narendra+Reddy%2C
    }

    const generateQr = () => {
        console.log("QR Generated....", url, email, subject, message)
        switch (currentBtn) {
            case "URL":
                createQr(url)
                break;
            case "EMAIL":
                generateEmailQr()
                break;
            default:
                break;
        }
    }
    const handleSubmit = (e) => {
        if (formRef) {
            formRef.current.submit();
        }
    }
    const isValidEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email)
        setEmailValid(isValid);
        return isValid;
    };

    return (
        <div className='box'>
            <ul >
                <ButtonGroup currentBtn={currentBtn} setCurrentBtn={setCurrentBtn} />
            </ul>
            <div>
                {currentBtn == "URL" && <UrlField setUrl={setUrl} />}
                {currentBtn == "EMAIL" && <EmailForm isValidEmail={isEmailValid} onEmailEntered={() => {
                    setEmailValid(true)
                }} onSubmit={handleSubmit} setEmail={setEmail} setSubject={setSubject} setMessage={setMessage} />}
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '0',
                margin: '0'
            }}>
                <ListItem
                    iconUrl={null}
                    onClick={() => {
                        generateQr()
                    }}
                    label={"Generate"}
                    extraClass={isShaking ? 'shake' : ''} // Apply shake class conditionally
                    toolTipText={null} />
            </div>
        </div>
    )
}

export default LeftComponent