import * as React from 'react';
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from "@mui/material/styles"

export default function Login() {
  const theme = useTheme()
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const styles = {
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3)
    },
    submit: {
      
    }
  }
  
  const handleSubmit = async () => {
    console.log("waw")
    resp = await fetch('/api/sessions/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        password: password
      })
    })
    console.log("wew", resp)
    console.log(await resp.json())
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={styles.paper}>
        <Typography sx={{margin: theme.spacing(3, 0, 2)}} align="center" component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={styles.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setName(e.target.value)}
                value={name}
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{margin: theme.spacing(3, 0, 2)}}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}