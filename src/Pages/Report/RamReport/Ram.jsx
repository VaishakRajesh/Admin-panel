import React from 'react'
import Style from './Ram.module.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'

const Ram = () => {
    const [MotherBoard, setMotherBoard] = React.useState('');

    const handleChange = (event) => {
      setMotherBoard(event.target.value);
    };
    return (
        // <div className={Style.Body}>
        //     <Sidebar />
        //     <div className={Style.container}>
        //         <Navbar />
                <div className={Style.Ram}>
                    <div className={Style.Text}>Insert Ram</div>
                    <div className={Style.TextField}>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Ram Name other Details"
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
                    <div className={Style.MotherBoard}>
                        <Box sx={{ minWidth: 250, color: 'Balck', backgroundColor: 'Black', border: '2px solid Black' }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label" sx={{ color: 'Black' }}>Select MotherBoard</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={MotherBoard}
                                    label="MotherBoard"
                                    onChange={handleChange}
                                    sx={{ color: '#9d3579', backgroundColor: 'White' }}
                                >
                                    <MenuItem value={10} sx={{ bgcolor: 'white', color: 'Black' }}>Ten</MenuItem>
                                    <MenuItem value={20} sx={{ bgcolor: 'white', color: 'Black' }}>Twenty</MenuItem>
                                    <MenuItem value={30} sx={{ bgcolor: 'white', color: 'Black' }}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className={Style.Button}><Button>Submit</Button></div>
                </div>
        //     </div>
        // </div>
    )
}

export default Ram