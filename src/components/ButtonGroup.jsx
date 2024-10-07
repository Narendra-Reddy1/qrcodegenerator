import React, { useContext, useState } from 'react'
import ListItem from './ListItem'
import urlIcon from "../assets/url.png"
const ButtonGroup = ({ currentBtn, setCurrentBtn }) => {
    //const { currentBtn, setCurrentBtn } = useContext(My)
    return (
        <div>
            <ListItem
                iconUrl={urlIcon}
                label={"URL"}
                toolTipText={"Opens the URL after scanning."}
                isSelected={currentBtn === "URL"}
                onClick={() => {
                    setCurrentBtn("URL")
                }} />
            <ListItem
                iconUrl={urlIcon}
                label={"EMAIL"}
                toolTipText={"Opens the EMAIL after scanning."}
                isSelected={currentBtn === "EMAIL"}
                onClick={() => {
                    setCurrentBtn("EMAIL")
                }} />
        </div>
    )
}

export default ButtonGroup