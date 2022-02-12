import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { spacing } from '@mui/system';


const User = (props) => {
    let name = props.user.name
    const avatarApl = name.charAt(0)
    console.log(avatarApl)
    return (
        <Card sx={{ height: 255, width: 220 }}  >
            <Grid container justifyContent="center" alignItems="center" spacing={{ p: 2 }}>
                <Grid justifyContent="center" alignItems="center" container sx={{ pb: 2 }} >
                    <Avatar sx={{ width: 56, height: 56, mt: 4 }}>{avatarApl}</Avatar>
                </Grid>
                <CardContent>
                    <Typography align="center">
                        {props.user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center" >
                        {props.user.username}
                    </Typography>

                    <Typography variant="caption" align="center" >
                        <a href="#"> {props.user.email}</a>
                    </Typography>

                    <CardActions>
                        <Button variant="contained">
                            <Link to={`/users/${props.user.id}`} style={{ textDecoration: 'none' }}>
                                MORE DETAILS
                            </Link>
                        </Button>
                    </CardActions>
                </CardContent>
            </Grid >
        </Card >
    )
}

export default User;