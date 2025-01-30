import React from 'react'
import Style from './Cooler.module.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import { Button, TextField } from '@mui/material'

const Cooler = () => {
    return (
        // <div className={Style.Body}>
        //     <Sidebar />
        //     <div className={Style.container}>
        //         <Navbar />
                <div className={Style.Cooler}>
                    <div className={Style.Text}>Insert Cooler</div>
                    <div className={Style.TextField}>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Cooler Name"
                            multiline
                            maxRows={4}
                            variant="standard"
                            sx={{
                                width: '200px', // Increase width
                                '& .MuiInputBase-root': {
                                    color: 'Black', // Text color
                                    fontSize: '18px', // Increase text size
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'Black', // Label color
                                    fontSize: '20px', // Increase label size
                                },
                                '& .MuiInput-underline:before': {
                                    borderBottomColor: 'Black', // Default underline color
                                },
                                '& .MuiInput-underline:hover:before': {
                                    borderBottomColor: 'Black', // Hover underline color
                                },
                                '& .MuiInput-underline:after': {
                                    borderBottomColor: 'Black', // Focused underline color
                                },
                            }}
                        />
                    </div>
                    <div className={Style.Button}><Button>Submit</Button></div>
                </div>
        //     </div>
        // </div>
    )
}

export default Cooler