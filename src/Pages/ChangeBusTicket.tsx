import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../reservation.css';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/garcia/garciaFooter';

function ChangeBusTicket(this: any) {
    return (
        <div className="App">
        <ResponsiveAppBar/>
        <div className = "reservation__content" >
                <div className = "reservation__cards">
                <Stack direction="row" spacing={20}>
                        <article className='reservation__card'>
                        <h1>Main Information</h1>
                            <h4>22 December 2022, Thursday</h4>
                            <h4>1 person</h4>
                            <h4>Airconditioned</h4>
                            <h4>Sugbo Transit</h4>
                            <h4>31 seats</h4>
                            <h4>Php 200</h4>
                            <h1>Schedule</h1>
                            <h4>12:00 PM Starmall</h4>
                            <h5>1:00 PM Carcar</h5>
                            <h5>2:00 PM Sibonga</h5>
                            <h5>3:00 PM Oslob</h5>
                            <h4>3:30 PM Santander</h4>
                            <h4>Travel Time: 3 hours and 3 minutes</h4>
                        </article>
                        <div>
                            <h1 style={{display:'flex', marginTop: "65px", marginLeft: "-14px", justifyContent: "center"}}>Ticket</h1>
                            <div className='circle' style={{display:'flex', marginLeft: "840px", marginTop: "60px"}}>
                            <img src={'/assets/QRCODE.png'} width={200} height={200}/>
                            </div>
                            <div style={{marginTop: "200px"}}>
                            <h4>Ticket Id: 5</h4>
                            <h4>Payment Id: null</h4>
                            <h4 style={{color: "red"}}>Note: Ticket is not valid until physical payment is verified.</h4>
                            <Stack direction="column" spacing={2}>
                            <Button variant="outlined"  size="large" sx={{borderColor:'#CA7715', color: 'black', bottom: 30, top: 20, width: 500, borderRadius:2, fontWeight:"600", ":hover": {backgroundColor: '#F79110', borderColor: '#F79110', color: 'white'}}}>Download</Button>
                            </Stack>
                            </div>
                        </div>
                    </Stack>
                </div>
        </div>
        <div style={{marginTop: "-30px"}}>
        <Footer name="Jose Felipe Terdes" course="BSCS" section="F2"/>
        </div>
        </div>
    );
  }
  
  export default ChangeBusTicket;