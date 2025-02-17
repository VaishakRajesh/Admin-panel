import React, { useEffect, useState } from 'react'
import Style from './MotherBoard.module.css'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import Types from '../Types/Types';
import axios from 'axios'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Company from '../Company/Company';
const MotherBoard = () => {

    const handleChange1 = (event) => {
        setType(event.target.value);
    };
    const handleChange2 = (event) => {
        setCompany(event.target.value);
    };


    const fetchTypes = () => {
        axios.get("http://localhost:5000/collectionType").then((response) => {
            console.log(response.data);
            setTypeArray(response.data.type)
        })
    }
    const fetchCompany = () => {
        axios.get("http://localhost:5000/collectionCompany").then((response) => {
            console.log(response.data);
            setCompanyArray(response.data.company)
        })
    }
    const fetchMotherboard = () => {
        axios.get("http://localhost:5000/collectionCompany").then((response) => {
            console.log(response.data);
            setMotherboardArray(response.data)
        })
    }


    const [CompanyArray, setCompanyArray] = React.useState([]);
    const [Company, setCompany] = useState("")
    const [PlaceArray, setPlaceArray] = useState([])
    const [TypeArray, setTypeArray] = useState([])
    const [Type, setType] = useState([])
    const [MotherboardArray, setMotherboardArray] = useState([])

    const HandleSubmit = () => {
        const data = {
            districtId: District,
            placeName: Place
        }
        axios.post("http://localhost:5000/collectionPlace", data).then((response) => {
            console.log(response)
            seterrors("Insert Successfully")
            setOpen(true);
            fetchMotherboard();
        }).catch((err) => {
            console.log(err);
            seterrors("Data already exists")
            setOpen(true);
        })
    }

    useEffect(() => {

        fetchCompany();
        fetchTypes();
        }, [])

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
                    }} onChange={(e) => setPlace(e.target.value)}
                />
            </div>
            <div className={Style.Types}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel
                        id="demo-simple-select-standard-label"
                        sx={{ fontSize: 20, fontWeight: 'bold' }}
                    >
                        Select Types
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={Type}
                        onChange={handleChange1}
                        label="Select Types"
                        sx={{
                            width: 200,
                            fontWeight: 'bold',
                            color: 'black', // Ensures selected text remains black
                        }}
                    >
                        
                        {TypeArray?.map((Type, index) => (
                            <MenuItem key={index} value={Type._id} sx={{ color: 'black' }}>
                                {Type.typeName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className={Style.Company}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel
                        id="demo-simple-select-standard-label"
                        sx={{ fontSize: 20, fontWeight: 'bold' }}
                    >
                        Select Company
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={Company}
                        onChange={handleChange2}
                        label="Select District"
                        sx={{
                            width: 200,
                            fontWeight: 'bold',
                            color: 'black', // Ensures selected text remains black
                        }}
                    >
                        {CompanyArray?.map((Company, index) => (
                            <MenuItem key={index} value={Company._id} sx={{ color: 'black'}}>
                                {Company.companyName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </div>
            <div className={Style.Button}><Button onClick={HandleSubmit}>Submit</Button></div>
        </div>
    )
}

export default MotherBoard