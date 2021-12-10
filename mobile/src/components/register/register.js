import useFormal from '@kevinwolf/formal-native'
import React from 'react'
import { Alert, StyleSheet, View, SafeAreaView, ScrollView} from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import * as yup from 'yup'
import api from '../../api/api'
import Header from '../header/headerinicial'


const schema = yup.object().shape({
  cpf: yup.string().required("Por favor digite o cpf").min(11).max(11, "Máximo de 11 dígitos"),
  email: yup.string().required("Por favor digite o email").email("E-mail invalido"),
  cargo: yup.string().required("Por favor digite o cargo").min(2, "Cargo muito curto"),
  nome: yup.string().required("Por favor digite o nome").min(2, "Nome muito curto"),
  senha: yup.string().required("Por favor digite a senha").min(6, "Senha de no mínimo 6 caracteres"),
})

const initialValues = {
  cpf: '',
  nome: '',
  cargo: '',
  email: '',
  senha: '',
}

const Field = ({ placeholder, error, ...props }) => (
  <>
    <Text style={styles.space}>{placeholder}</Text>
    <Input {...props} />
    {error && (
      <Text style={[styles.space, error && styles.error]}>{error}</Text>
    )}
  </>
)

function Register() {
  const formal = useFormal(initialValues, {
    schema,
    onSubmit: async values => {
      const cpf = values['cpf']
      const nome = values['nome']
      const email = values['email']
      const cargo = values['cargo']
      const senha = values['senha']
      try {
        const resposta = await api.post("/insert", {cpf, nome, email, cargo, senha})
        alert('Cadastro realizado com Sucesso!')
      } catch (error) {
        alert('Cadastro não realizado.')
      }    
    },
  })

  return (
    <ScrollView>
    <SafeAreaView>
     <Header/>   
      <View style={styles.space}>  
        <Text style={styles.titulo}>Faça seu cadastro</Text>
        <Field {...formal.getFieldProps('cpf')} placeholder="CPF" />
        <Field {...formal.getFieldProps('nome')} placeholder="Nome" />
        <Field {...formal.getFieldProps('cargo')} placeholder="Cargo" />
        <Field {...formal.getFieldProps('email')} placeholder="Email" />
        <Field
          {...formal.getFieldProps('senha')}
          placeholder="Senha"
          secureTextEntry
        />
        <Button
          style={styles.space}
          {...formal.getSubmitButtonProps()}
          disabled={false}
          title="Cadastrar"
        />
      </View>
    </SafeAreaView>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  space: {
    margin: 1,
    paddingVertical: 1,
    paddingHorizontal: 25
  },
  titulo: {
    fontSize: 28,
    textAlign: 'center',
  },
  error: {
    color: 'red',
  },
})

export default Register;