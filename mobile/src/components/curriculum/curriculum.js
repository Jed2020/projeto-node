import useFormal from '@kevinwolf/formal-native'
import React from 'react'
import { Alert, StyleSheet, View, SafeAreaView, ScrollView} from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import * as yup from 'yup'
import Header from '../header/headerinicial'
import {useAuth} from '../../Auth/AuthContext'
import api from '../../api/api'

const schema = yup.object().shape({
  experiencia: yup.string().required("Por favor digite a experiência").min(2, "Muito curto"),
  atividades_exercidas: yup.string().required("Por favor digite o tipo de atividade").min(2, "Muito curto"),
  data_inicio: yup.string().required("Por favor digite a Data").min(10, "Muito curto"),
  data_final: yup.string().required("Por favor digite a Data").min(10, "Muito curto"),
  
})

const initialValues = {
  experiencia: '',
  atividades_exercidas: '',
  data_inicio: '',
  data_final: '',
  id_cpf: '',
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

function Curriculum() {  

  const { cpf } = useAuth();

  const formal = useFormal(initialValues, {
    schema,
    onSubmit: async values => {
      const experiencia = values['experiencia']
      const atividades_exercidas = values['atividades_exercidas']
      const data_inicio = values['data_inicio']
      const data_final = values['data_final']
      
      try {
        const resposta = await api.post("/curriculum", {experiencia, atividades_exercidas, data_inicio, data_final, id_cpf : cpf})
        alert('Seus dados estão corretos!')
      } catch (error) {
        alert('Seus dados NÂO estão corretos!')
      }
    },
  })

  return (
    <ScrollView>
      <SafeAreaView>
        <Header/>
        <View style={styles.space}>
        <Text style={styles.titulo}>Cadastre Habilidades</Text>
        <Field {...formal.getFieldProps('experiencia')} placeholder="Experiência" />
        <Field {...formal.getFieldProps('atividades_exercidas')} placeholder="Atividades Exercidas" />
        <Field {...formal.getFieldProps('data_inicio')} placeholder="Data Inicial" />
        <Field {...formal.getFieldProps('data_final')} placeholder="Data Final" />
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

export default Curriculum;
