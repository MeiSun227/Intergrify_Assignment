/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

function User({ user }) {
  const { name } = user;
  const avatarApl = name.charAt(0);
  console.log(avatarApl);
  return (
    <Card sx={{ height: 255, width: 220 }}>
      <Grid container justifyContent="center" alignItems="center" spacing={{ p: 2 }}>
        <Grid justifyContent="center" alignItems="center" container sx={{ pb: 2 }}>
          <Avatar sx={{ width: 56, height: 56, mt: 4 }}>{avatarApl}</Avatar>
        </Grid>
        <CardContent>
          <Typography align="center">
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {user.username}
          </Typography>
          <Typography variant="caption" align="center">
            <a href="#">
              {' '}
              {user.email}
            </a>
          </Typography>
          <CardActions>
            <Button variant="contained">
              <Link to={`/users/${user.id}`} style={{ textDecoration: 'none' }}>
                MORE DETAILS
              </Link>
            </Button>
          </CardActions>
        </CardContent>
      </Grid>
    </Card>
  );
}

export default User;
