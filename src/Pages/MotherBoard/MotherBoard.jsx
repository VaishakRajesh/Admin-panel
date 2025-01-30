import React from 'react'
import Style from './MotherBoard.module.css'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'

const MotherBoard = () => {
    const [Types, setTypes] = React.useState('');

    const handleChange = (event) => {
      setTypes(event.target.value);
    };
    const [Company, setCompany] = React.useState('');

    const handleCompany = (event) => {
      setCompany(event.target.value);
    };
    return (
                <div className={Style.MotherBoard}>
                    <div className={Style.Text}>Insert MotherBoard</div>
                    <div className={Style.TextField}>
                        <TextField
                            id="standard-multiline-flexible"
                            label="MotherBoard"
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
                    <div className={Style.Types}>
                        <Box sx={{ minWidth: 250, color: 'Balck', backgroundColor: 'Black', border: '2px solid Black' }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label" sx={{ color: 'Black' }}>Select Types</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={Types}
                                    label="Types"
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
                    <div className={Style.Company}>
                        <Box sx={{ minWidth: 250, color: 'Balck', backgroundColor: 'Black', border: '2px solid Black' }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label" sx={{ color: 'Black' }}>Select Company</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={Company}
                                    label="Company"
                                    onChange={handleCompany}
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
    )
}

export default MotherBoard