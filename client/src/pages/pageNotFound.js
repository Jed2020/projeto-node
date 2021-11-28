import React from "react";
import Typography from '../components/body/typography';
import Footer from '../components/footer/footer';

function PageNotFound() {
  return (
    <div className="pageNotFound">
     <Typography variant="h4" marked="center" align="center" component="h2">
      Oops..! 404 Page Not Found
      </Typography>
      <Typography variant="h4" marked="center" align="center" component="h2">
      Looks like you came to wrong page on our server
     </Typography>
     <Typography variant="h4" marked="center" align="center" component="h2">
     <img src={'https://raw.githubusercontent.com/oshyam/404-with-react-router-dom/master/src/pagenotfound.jpg'} height="500" width="500" alt="not found"/>
     </Typography>
     <Footer/>
    </div>
  );
}

export default PageNotFound;    