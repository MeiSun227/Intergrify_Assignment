import React from "react";
import { useParams } from "react-router-dom"
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { spacing } from '@mui/system';

const UserInfo = ({ users }) => {
    const id = useParams().id
    const user = users.find(u => u.id === Number(id))
    console.log('lee')
    console.log(users)

    return (
        <div>
            <Container maxWidth="sm" sx={{ pt: 2 }}>
                <Paper elevation={3} sx={{ p: 2 }} >
                    <Typography>
                        Name: {user.name}
                    </Typography>
                    <Typography>
                        userName: {user.username}
                    </Typography>
                    <Typography>
                        Email: {user.email}
                    </Typography>
                    <Typography>
                        Address:
                    </Typography>
                    <Typography>
                        street:{user.address.street}
                    </Typography>
                    <Typography>
                        suite:{user.address.suite}
                    </Typography>
                    <Typography>
                        city:{user.address.city}
                    </Typography>
                    <Typography>
                        zipcode:{user.address.zipcode}
                    </Typography>
                </Paper>
            </Container>
        </div>
    )
}

export default UserInfo