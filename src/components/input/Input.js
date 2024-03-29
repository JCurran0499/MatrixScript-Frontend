import { useState, useEffect } from 'react'
import axios from 'axios'
import './Input.css'

export const Input = (props) => {
    const [command, handleCommand] = useState("")
    const [commandResponse, handleCommandResponse] = useState({})
    const [triggerCommand, toggleTriggerCommand] = useState(false)
    const [triggerCommandResponse, toggleTriggerCommandResponse] = useState(false)

    const [commandHistory, handleCommandHistory] = useState([])
    const [commandIndex, handleCommandIndex] = useState(-1)

    const [disabled, toggleDisabled] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_BACKEND}/`,
            params: {
                'token': props.sessionToken
            },
            data: {
              command: command
            }
        })
        .then((res) => res.data)
        .then((json) => handleCommandResponse(json))
        .then(() => toggleTriggerCommand(true))
        .catch((err) => {
            toggleDisabled(true)
            errorAlert(err)
        })
    }

    const errorAlert = (err) => {
        if (err.response.status == 401) {
            alert("Your session has expired. Please refresh your page to generate a new session.")
        }

        else if (err.response.status == 500) {
            alert("The server encountered an unexpected error. We apologize for the inconvenience and we will look into this issue.")
        }
    }

    /* Waterfall Effect */
    useEffect(() => {
        if (triggerCommand) {
            handleCommandHistory([...commandHistory, command])
            handleCommandIndex(-1)

            props.onSubmitCommand(command)
            handleCommand('')
            
            toggleTriggerCommandResponse(true)
        }
    }, [triggerCommand])

    useEffect(() => {
        if (triggerCommandResponse) {
            props.onSubmitCommandResponse(commandResponse)

            toggleTriggerCommand(false)
            toggleTriggerCommandResponse(false)
        }
    }, [triggerCommandResponse])
    /* ----------------- */


    const searchHistory = (k) => {
        if (k === "ArrowUp" && (commandIndex === -1 || commandIndex > 0)) {
            if (commandIndex === -1) handleCommandIndex(commandHistory.length - 1)
            else handleCommandIndex(commandIndex - 1)
        }

        else if (k === "ArrowDown") {
            if (commandIndex !== -1) handleCommandIndex(commandIndex + 1)
        }
    }

    useEffect(() => {
        if (commandIndex > -1 && commandIndex < commandHistory.length) {
            handleCommand(commandHistory[commandIndex])
        }
        else if (commandIndex >= commandHistory.length) {
            handleCommand("")
            handleCommandIndex(-1)
        }
    }, [commandIndex])

    return (
        <div id="input">
            <p>{">> "}</p>
            <form onSubmit={handleSubmit} autoComplete="off" spellCheck="false">
                <input
                    id="commandInput"
                    type="input"
                    value={command}
                    disabled={disabled}
                    onChange={(e) => handleCommand(e.target.value)}
                    onKeyDown={(e) => searchHistory(e.code)}
                    autoFocus
                />
                <br/>
            </form>
        </div>
    )
}
