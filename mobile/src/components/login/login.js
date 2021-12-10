import useFormal from '@kevinwolf/formal-native'
import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import * as yup from 'yup'
import Header from '../header/headerinicial'
import {useAuth} from '../../Auth/AuthContext'


const schema = yup.object().shape({
  cpf: yup.string().required().min(11).max(11, "Máximo de 11 dígitos"),
  senha: yup.string().required("Por favot digite a senha").min(6, "Senha de no mínimo 6 caracteres"),
})

const initialValues = {
  cpf: '',
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


function Login() {

  const { setUser } = useAuth();

  const formal = useFormal(initialValues, {
    schema,
    onSubmit: async values => {
      const cpf = values['cpf']
      const senha = values['senha']
      
      try {
        setUser (cpf, senha)
      } catch (error) {
        alert('Cadastro não realizado.')
      }    
      
    },
  })

  return (
            <SafeAreaView>
              <Header/>
              <View style={styles.space}>
              <Text style={styles.titulo}>Faça seu cadastro</Text>
              <Field {...formal.getFieldProps('cpf')} placeholder="CPF" />
              <Field
                {...formal.getFieldProps('senha')}
                placeholder="Senha"
                secureTextEntry
              />
              <Button
                style={styles.space}
                {...formal.getSubmitButtonProps()}
                disabled={false}
                title="Entrar"
              />
            </View>
          </SafeAreaView>
        )
}

const styles = StyleSheet.create({
  space: {
    margin: 1,
    paddingVertical: 1,
    paddingHorizontal: 15
  },
  titulo: {
    fontSize: 28,
    textAlign: 'center',
  },
  error: {
    color: 'red',
  },
})

export default Login;