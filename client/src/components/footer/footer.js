import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '../body/typography';
import "../form.css";

export default function AppFooter() {
  return (
    <Typography component="footer">
      <React.Fragment>
        <div className="footer">
       {'© '}
        <Link color="inherit" href="http://localhost:3000/">
            DevDotCom
        </Link>{' '}
       {new Date().getFullYear()}
       </div>
     </React.Fragment>                   
    </Typography>
  );
}