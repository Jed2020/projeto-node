import React from "react";
import { TextField, Button, Box, Grid } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { api } from "../../utils/api";
import Typography from '../body/typography';

const initalValues = {
  cpf: "",
  nome: "",
  cargo: "", 
  email: "",
  senha: "",
};


const FormRegister = () => {
  
  return (
    <Grid
      id='cadastro'
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
      >
      <Typography 
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
      Faça seu de Cadastro
      </Typography>
      <Formik
        initialValues={initalValues}
        validationSchema={object({
          cpf: string().required().min(11).max(11, "Máximo de 11 dígitos"),
          email: string().required("Por favot digite o email").email("E-mail invalido"),
          cargo: string().required("Por favot digite o cargo").min(2, "Cargo muito curto"),
          nome: string().required("Por favot digite o nome").min(2, "Nome muito curto"),
          senha: string().required("Por favot digite a senha").min(6, "Senha de no mínimo 6 caracteres"),
        })}
        onSubmit={(values, formikHelpers) => {
          api.post("/api/insert", values).then(function(response) {
            alert('Cadastro realizado com Sucesso!')
          }).catch(error => {
            alert('Cadastro não realizado.')
          })          
          formikHelpers.resetForm();
        }}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form>
            <Field
              name="cpf"
              type="cpf"
              as={TextField}
              variant="outlined"
              color="primary"
              label="CPF"
              fullWidth
              error={Boolean(errors.cpf) && Boolean(touched.cpf)}
              helperText={Boolean(touched.cpf) && errors.cpf}
            />
            <Box height={14} />
            <Field
              name="nome"
              type="nome"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Nome"
              fullWidth
              error={Boolean(errors.nome) && Boolean(touched.nome)}
              helperText={Boolean(touched.nome) && errors.nome}
            />
            <Box height={14} />
            <Field
              name="cargo"
              type="cargo"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Cargo"
              fullWidth
              error={Boolean(errors.cargo) && Boolean(touched.cargo)}
              helperText={Boolean(touched.cargo) && errors.cargo}
            />
            <Box height={14} />
            <Field
              name="email"
              type="email"
              as={TextField}
              variant="outlined"
              color="primary"
              label="E-mail"
              fullWidth
              error={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
            />
            <Box height={14} />
            <Field
              name="senha"
              type="password"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Senha mínimo 6 caracteres"
              fullWidth
              error={Boolean(errors.senha) && Boolean(touched.senha)}
              helperText={Boolean(touched.senha) && errors.senha}
            />
            <Box height={14} />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={!isValid || !dirty}
            >
              Cadastrar
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default FormRegister;