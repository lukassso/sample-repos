import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import BackToTop from './CollectionComponents/app-bar/BackToTop'
import ButtonAppBar from './CollectionComponents/app-bar/ButtonAppBar'
import BadgeAvatars from './CollectionComponents/avatars/BadgeAvatars'

function Copyright() {
  return (
    <>
    
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Lukassso
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </>
  );
}

export default function App() {
  return (
    <>
    
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React Lukassso Collection Library ver. Alpha
        </Typography>
      </Box>
    </Container>
    <BackToTop/>
    <Copyright />

    </>
  );
}