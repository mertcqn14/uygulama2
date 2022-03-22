import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LoginCaption from '../utils/login/loginCaption';
import { Button, Link, TextField } from '@material-ui/core';
import { useHistory } from 'react-router';
import Box from '@mui/material/Box';
import indirLogo from '../images/indirLogo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {  
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function MyAccount() {
  const classes = useStyles();
  const history = useHistory();
 
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
        Kullanıcı Hesap Profili
        </Grid>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1.5, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <Grid item xs={7} style={{ textAlign:'right' }}>
             <img src={indirLogo} style={{height:'325px'}}/>
        </Grid>
     
        <TextField
          id="outlined-password-input"
          label="Name"
          type="Name"
          defaultValue="Muzaffer"
          />  
        <TextField
          disabled
          id="outlined-required"
          label="Username"
          defaultValue="Muzaffer<3<3"
        />
        <TextField
          disabled
          id="outlined-required"
          label="Surname"
          defaultValue="Övün<3"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          defaultValue="123456"
       
        />
        <TextField
          id="outlined-read-only-input"
          label="email"
          defaultValue="ajklas@hotmail.com"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="phoneNumber"
          type="number"
          defaultValue="059625425645"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" 
        label="Gender" 
        type="Erkek" 
        defaultValue="Erkek"
        />
        <TextField
          id="outlined-helperText"
          label="Age"
          defaultValue="37"
          helperText="Some important text"
        />
      </div>
      
        <TextField
          required
          id="filled-required"
          label="City​OfResidence"
          defaultValue="Bolu"
          variant="filled"
        />
        <TextField
          required
          id="filled-disabled"
          label="WebSite"
          defaultValue="https://mui.com/"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Usertype"
          type="Usertype"
          autoComplete="Individual"
          variant="filled"
          defaultValue="Bireysel"
          />
          
          </Box>
          </Grid>
          <Grid>
          </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}> 
          </Grid> 
        </Grid>

    </div>
  );
}
