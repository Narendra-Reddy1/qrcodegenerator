import React, { createContext, useState } from 'react'
import ButtonGroup from './ButtonGroup'
import UrlField from './UrlField'
import ListItem from './ListItem'
import EmailForm from './EmailForm'

const LeftComponent = () => {
    const [currentBtn, setCurrentBtn] = useState("")
    const MyContext = createContext();
    return (
        <div className='box'>
            <ul >
                <ButtonGroup currentBtn={currentBtn} setCurrentBtn={setCurrentBtn} />
            </ul>
            <div>
                {currentBtn == "URL" && <UrlField />}
                {currentBtn == "EMAIL" && <EmailForm />}
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '0',
                margin: '0'
            }}>
                <ListItem iconUrl={null} label={"Generate"} toolTipText={null} />
            </div>
        </div>

    )
}

export default LeftComponent