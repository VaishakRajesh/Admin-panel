import React, { useEffect, useState } from 'react'
import Style from './District.module.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import { Button, TextField } from '@mui/material'
import axios from 'axios'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const District = () => {

    const [open, setOpen] = React.useState(false);
    const [errors, seterrors] = useState("")
    const handleClose = () => {
        setOpen(false);
    };

    const [district, setdistrict] = useState("")
    const [districtArray, setDistrictArray] = useState([])
    const HandleSubmit = () => {
        const data = {
            districtName: district
        }
        axios.post("http://localhost:5000/collectionDistrict", data).then((response) => {
            console.log(response)
            seterrors("Insert Successfully")
            setOpen(true);

        }).catch((err) => {
            console.log(err);
            seterrors("Data already exists")
            setOpen(true);
        })
    }

    useEffect(() => {
        axios.get("http://localhost:5000/collectionDistrict").then((response) => {
            console.log(response.data);
            setDistrictArray(response.data)

        })
    }, [])
    return (
        <div className={Style.Body}>
            <Sidebar />
            <div className={Style.container}>
                <Navbar />
                <div className={Style.District}>
                    <div className={Style.box}>
                        <div className={Style.text}>Insert District<br /><br /></div>
                        <div className={Style.TextField}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="District Name"
                                multiline
                                maxRows={4}
                                variant="standard"
                                sx={{
                                    width: '200px', // Set custom width
                                    '& .MuiInputBase-root': { // Root container
                                        minHeight: '60px', // Set minimum height
                                    },
                                    '& .MuiInputBase-input': { // Targets the input text
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        color: 'black',
                                    },
                                    '& .MuiInputLabel-root': { // Targets the label
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        color: 'black',
                                    }
                                }}
                                onChange={(e) => setdistrict(e.target.value)} />
                        </div>
                      
                        <br />
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

                </div>
                <table>
                            <tr>
                                <td>Sl No</td>
                                <td>Name</td>
                            </tr>
                            {
                                districtArray.map((item,index) => (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.districtName}</td>
                                    </tr>
                                ))
                            }

                        </table>
            </div>
        </div>
    )
}

export default District