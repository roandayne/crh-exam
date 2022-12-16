import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Dashboard() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      let resp = await fetch('/api/sessions/', { method: 'GET' })
      
      if (!resp.ok) {
        navigate('/')
      }
    }

    getUser()
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const responseJson = await response.json()
      if (!response.ok) {
        throw new Error('Data coud not be fetched!')
      } else {
        setUsers(responseJson)
      }
    }

    getUsers()
  }, [])

  const handleLogout = async () => {
    let resp = await fetch('/api/sessions/', { method: 'DELETE' })
    resp = await fetch('/api/sessions/')

    if(!resp.ok) {
      navigate('/')
    }
  }

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
      {users && users.map(({name, username, phone, company}) => {
        return (
          <Card variant="outlined" sx={{ width: '400px', margin: "20px" }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Name: {name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                "{username}"
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Company Name: {company.name}
              </Typography>
              <Typography variant="body2">
                Phone Number: {phone}
              </Typography>
            </CardContent>
          </Card>
        )
      })}

      <Button variant="contained" onClick={handleLogout}>Log out</Button>
    </Box>
  )
}

export default Dashboard