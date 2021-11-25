import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from './appBar';
import Toolbar from './toolBar';


const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {

  function logOut() {    
    localStorage.clear();
  };
  return (
    <div>
      <AppBar position="fixed" style={{ background: '#28282a'}}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/editableSchool"
            sx={{ fontSize: 24 }}
          >
            {'DevDotCom'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              sx={rightLink}
              component={RouterLink} to="/inicial"
            >
              {'Voltar'}
            </Link>
            <Link
              variant="h6"
              underline="none"  
              sx={{ ...rightLink}}
            >
            <RouterLink to ="/"
             onClick={logOut}
            >
              {'Sair'}
              </RouterLink>  
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;