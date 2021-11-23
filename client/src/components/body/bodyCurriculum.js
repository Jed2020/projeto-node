import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from './button.js';
import Typography from './typography.js';


const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: '#28282a',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
};

export default function BodyCurriculum() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: '#CDC9C9', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          style={{ background: 'none'}}
          src="https://mui.com/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }} 
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          Como funciona:
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="https://img.icons8.com/external-konkapp-outline-color-konkapp/64/000000/external-working-work-from-home-konkapp-outline-color-konkapp-2.png"
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h6" align="center">
                  Levante todas as informações de suas Habilidades profissional
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-graduation-elearning-and-education-justicon-flat-justicon.png"
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h6" align="center">
                Faça o mesmo com Escolaridade, incluindo idiomas
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="https://img.icons8.com/external-becris-lineal-color-becris/64/000000/external-keyboard-coding-programming-becris-lineal-color-becris.png"
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h6" align="center">
                  Agora é so registrar nos formulários abaixo
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="#cadastrohab"
          sx={{ mt: 8 }}
        >
          VAMOS COMEÇAR
        </Button>
      </Container>
    </Box>
  );
}

