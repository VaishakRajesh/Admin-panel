import React, { useEffect, useState } from 'react'
import Style from './CPU.module.css'
import axios from 'axios'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const CPU = () => {
    const [open, setOpen] = React.useState(false);
    const [errors, seterrors] = useState("")
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setcompany(event.target.value);
    };

    const [CompanyArray, setCompanyArray] = useState([])
    const fetchCompany = () => {
        axios.get("http://localhost:5000/CollectionCompany").then((response) => {
            console.log(response.data.company);
            setCompanyArray(response.data.company)
        })
    }
    useEffect(() => {
        fetchCompany();
    }, [])

    const [cpu, setcpu] = useState("")
    const [cpuDetail, setcpuDetails] = useState("")
    const [image, setimage] = useState("")
    const [company, setcompany] = useState("")
    const HandleSubmit = () => {
        const formDataToSend = new FormData();

        formDataToSend.append('name', cpu);
        formDataToSend.append('details', cpuDetail);
        formDataToSend.append('company', company);
        if (image) formDataToSend.append('image', image);

        try {

            axios.post('http://localhost:5000/collectionCPU', formDataToSend).then((response) => {
                // setMessage('Registration successful!');
                alert("Registration successful");
                console.log('Registration successful:', response.data);
            })

        } catch (error) {
            // setMessage('Error registering. Please try again.');
            console.error('Error registering:', error);
        }
    }
    return (

        <div className={Style.Types}>
            <div className={Style.Text}>Insert CPU</div>
            <div className={Style.TextField}>
                <TextField
                    id="standard-multiline-flexible"
                    label="cpu"
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
                    onChange={(e) => setcpu(e.target.value)} />
            </div>
            <div className={Style.TextField}>
                <TextField
                    id="standard-multiline-flexible"
                    label="cpuDetails"
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
                    onChange={(e) => setcpuDetails(e.target.value)} />
            </div>
            <div className={Style.TextField}>
                <FormControl fullWidth sx={{ minWidth: 250 }}>
                    <InputLabel
                        id="company-select-label"
                        sx={{
                            color: '#424242', // Dark gray label
                            '&.Mui-focused': {
                                color: '#212121', // Black when focused
                            }
                        }}
                    >
                        Select Company
                    </InputLabel>
                    <Select
                        labelId="company-select-label"
                        id="company-select"
                        value={company}
                        label="Select Company"
                        onChange={handleChange}
                        sx={{
                            color: '#212121', // Black text
                            backgroundColor: '#ffffff', // White background
                            borderRadius: '4px',
                            border: '1px solid #e0e0e0',
                            transition: 'all 0.2s ease',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#bdbdbd', // Medium gray border
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#9e9e9e', // Darker gray on hover
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#616161', // Dark gray when focused
                                boxShadow: '0 0 0 2px rgba(97,97,97,0.2)',
                            },
                            '& .MuiSvgIcon-root': {
                                color: '#757575', // Medium gray icon
                            }
                        }}
                    >
                        {CompanyArray?.map((company, index) => (
                            <MenuItem
                                key={index}
                                value={company._id}
                                sx={{
                                    color: '#212121', // Black text
                                    backgroundColor: '#ffffff', // White background
                                    '&:hover': {
                                        backgroundColor: '#f5f5f5', // Light gray hover
                                    },
                                    '&.Mui-selected': {
                                        backgroundColor: '#eeeeee', // Medium gray selected
                                        '&:hover': {
                                            backgroundColor: '#e0e0e0', // Darker gray hover for selected
                                        }
                                    }
                                }}
                            >
                                {company.companyName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            <div >
                <input type="file" id='image' onChange={(e) => setimage(e.target.files[0])} />
            </div>
            <div className={Style.Button}><Button onClick={HandleSubmit}>Submit</Button></div>
            <React.Fragment>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {errors}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Ok</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </div>
        //     </div>
        // </div>
    )
}

export default CPU