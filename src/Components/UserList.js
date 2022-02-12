import React from "react";
import User from './User';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';



const UserList = (props) => {
    const users = props.users

    return (
        <Container sx={{ pt: 2 }}>
            <Grid container spacing={{ xs: 4, md: 5, pb: 2 }} columns={{}}>
                {users.map((user) => (
                    <Grid item xs={2} sm={2} md={1} key={user.id}>
                        <User key={user.id} user={user} />
                    </Grid>
                ))}
            </Grid>
        </Container>

    )


}

export default UserList