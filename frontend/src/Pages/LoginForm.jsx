//import anything from any loaction / library
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
} from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';

//function definition
function LoginForm() {
//2.1 Hooks Variable / State Variable 
  const [userName,setUserName] = useState('');

//2.2  Function definition by fat arrow (new method)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', userName);
  };
  let sendData = (fa) =>{
    //console.log("Hello Nidhi");
    let payload = {
        "data": {
          "name": userName
        }
      };

    console.log(payload);
    //fetch api used to call Api
    //fetch(url,options).then(aa1).then().then().catch(aa).finally();
    //fetch('string',{key:value,key:value}).then(aa1).then().then().catch(aa).finally();

    fetch('http://localhost:1337/api/usernames',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
      }).then((response )=>{
        return response.json();
      }).then((data)=>{
          console.log(data);
      });

    }


//2.3  Every Function Return Something 
  return (
    <>
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      <Paper elevation={10} sx={{ p: 4, maxWidth: 400, width: '100%', borderRadius: 3 }}>
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
          Enter Your Login Username
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            name="username"
            variant="outlined"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <Button
            fullWidth
            variant="contained"
            type="button"
            onClick={sendData}
            sx={{
              mt: 3,
              py: 1.5,
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
              fontWeight: 'bold',
              borderRadius: 2,
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
    </>
  );
}

export default LoginForm;