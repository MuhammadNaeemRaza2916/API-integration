import { Box, TextField, Button, IconButton } from '@mui/material';
import { Send } from '@mui/icons-material';
import './contact.css'
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function Contact() {

    const [myMessages, setMyMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")

    const scrollToButtom = () =>{
        let windowsMessage = document.querySelector('#windowsMessage')
        windowsMessage.scrollTo(0, windowsMessage.scrollHeight);
    }

    useEffect(()=>{
        scrollToButtom();
    },[myMessages])

    const sendMessage = async (e) => {
        e.preventDefault();

        console.log("newMessage: ", newMessage)

        setMyMessages((prev) => {
            return [...prev, { text: newMessage, from: "user" }]
        })

        let response = await axios.post('http://localhost:5001/message', {
            query: newMessage
        }) 

        setMyMessages((prev) => {

            return [...prev,  {
                text: response?.data?.message?.text,
                from: "bot"
            }]
        })
        e.target.reset();
    }


    return <Box>

        <div id='windowsMessage' className='windowsMessage'>

            

            {myMessages.map((eachMessage, key) => {
                if (eachMessage.from === "bot") {

                    return <div key={key} className='leftBallon ballonMessage'>
                        <div>
                            <b>{ eachMessage .from }: </b><span>{ eachMessage .text }</span>
                        </div>
                    </div>

                } else {

                    return <div key={key} className='rightBallon ballonMessage'>
                        <div>
                            <b>{ eachMessage .from }: </b><span>{ eachMessage .text }</span>
                        </div>

                    </div>
                }
            }
            )}


        </div>

        <form onSubmit={sendMessage}>
            <Box sx={{ position: 'fixed', bottom: 0, width: "100%", display: 'flex' }}>
                <TextField onChange={(e) => { setNewMessage(e.target.value) }} sx={{ width: "90%" }} id='outlined-basic' placeholder='type a new message' variant='outlined' />
                <IconButton aria-label='send' size='large' type='submit'>
                    <Send fontSize="inherit" />
                </IconButton>
            </Box>
        </form>
    </Box>
}

export default Contact
