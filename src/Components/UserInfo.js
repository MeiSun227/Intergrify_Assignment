/* eslint-disable no-trailing-spaces */
import React from 'react';
import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function UserInfo({ users }) {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id));
  console.log('lee');
  console.log(users);

  return (
    <div>
      <Container maxWidth="sm" sx={{ pt: 2 }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <List>
            <ListItem>
              <Typography>
                - Name:
                {' '}
                {user.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                - Username:
                {' '}
                {user.username}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                - Email:
                {' '}
                {user.email}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                - Phone:
                {' '}
                {user.phone}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                - Company:
                {' '}
                {user.company.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                - Website:
                {' '}
                {user.website}
              </Typography>
            </ListItem>
            <ListItem>
              <List>
                <Typography>
                  - Address:
                </Typography>
                <ListItem>
                  <Typography>
                    - street:  
                    {' '}
                    {user.address.street}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    - suite: 
                    {' '}
                    {user.address.suite}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    - city:
                    {' '}
                    {user.address.city}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    - zipcode:
                    {' '}
                    {user.address.zipcode}
                  </Typography>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Paper>
      </Container>
    </div>
  );
}

export default UserInfo;
