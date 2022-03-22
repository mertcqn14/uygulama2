import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LoginCaption from '../utils/login/loginCaption';
import { Button, Link, TextField } from '@material-ui/core';
import { useHistory } from 'react-router';

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
export default function NewUser() {
  const classes = useStyles();
  const history = useHistory();
 const [username,setUsername]=useState("");
 const [password,setPassword]=useState("");
 const [rePassword,setrePassword]=useState("");
 const [name,setName]=useState("");
 const [surname,setSurname]=useState("");
 const [phone,setPhone]=useState("");
 const[adress,setAdress]=useState("");
 const [email,setEmail]=useState("");
 const [website,setWebsite]=useState("");
async function recordUser(){
  let formItems={username,password,rePassword,name,surname,adress,phone,email,website}
  let result=fetch("http://localhost:8080/api/users/adduser",{
   mode: 'no-cors',
  method:'POST',
    headers:{
      "Content-type":"application/json",
      "Accept":'application/json'
    },
    body:JSON.stringify(formItems)
    
  });
  result=await (await result).json();
  if(result.success){
    console.log("kayıt başarılı");


  }
  else{
    console.log(result);
  }
  
}

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <LoginCaption />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          Yeni Kullanıcı Kayıt Formu
        </Grid>
      </Grid>
      <center>
      <Grid container spacing={3} xs={8}>
        <Grid item xs={12}>
        <TextField  variant="outlined"  margin="normal"  required  fullWidth
            id="username"
            label="Kullanıcı Adınız"
            name="username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            autoFocus
          />
          <TextField  variant="outlined"  margin="normal"  required  fullWidth
            id="password"
            label="Şifrenizi girin."
            name="password"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <TextField  variant="outlined"  margin="normal"  required  fullWidth
            id="rePassword"
            label="Şifrenizi Tekrar girin."
            name="rePassword"
            type="password"
            value={rePassword}
            onChange={(e)=>setrePassword(e.target.value)}
          />
         <TextField  variant="outlined"  margin="normal"  required  fullWidth
            id="name" label="Adınız" name="name"  
            value={name}
            onChange={(e)=>setName(e.target.value)}        
          />
         <TextField  variant="outlined"  margin="normal"  required  fullWidth
            id="surname" label="Soyadınız" name="surname"  
            value={surname}         
            onChange={(e)=>setSurname(e.target.value)}
          />
         <TextField  variant="outlined"  margin="normal"  required  fullWidth
            id="adress" label="Adres bilginiz" name="adress"  
            value={adress}
            onChange={(e)=>setAdress(e.target.value)}         
          />
        <TextField  variant="outlined"  margin="normal"  fullWidth
            id="phone"  label="Telefon numaranız" name="phone"     
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}      
          />
        <TextField  variant="outlined"  margin="normal"  required  fullWidth
            id="email" label="iletişim Mail adresiniz" name="email"     
            value={email}
            onChange={(e)=>setEmail(e.target.value)}      
          />
        <TextField  variant="outlined"  margin="normal"  fullWidth
            id="website" label="Kişisel Web Sayfanız" name="website"   
            value={website}
            onChange={(e)=>setWebsite(e.target.value)}        
          />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={recordUser}
             >
            Kullanıcı Kaydını Yap
          </Button>
        </Grid>

      </Grid>
      </center>
    </div>
  );
}
