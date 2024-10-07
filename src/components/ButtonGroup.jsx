import React, { useState } from 'react'
import ListItem from './ListItem'
import urlIcon from "../assets/url.png"
const ButtonGroup = () => {
    const [currentBtn, setCurrentBtn] = useState("")
    return (
        <div>
            <ListItem
                iconUrl={urlIcon}
                label={"URL"}
                toolTipText={"Opens the URL after scanning."}
                isSelected={currentBtn === "URL"}
                onClick={() => {
                    setCurrentBtn("URL")
                    console.log("Selected")
                }} />
            <ListItem
                iconUrl={urlIcon}
                label={"EMAIL"}
                toolTipText={"Opens the EMAIL after scanning."}
                isSelected={currentBtn === "EMAIL"}
                onClick={() => {
                    setCurrentBtn("EMAIL")
                    console.log("Selected")
                }} />
        </div>
    )
}

export default ButtonGroup