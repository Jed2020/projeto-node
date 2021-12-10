import useFormal from '@kevinwolf/formal-native'
import React from 'react'
import { Alert, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import * as yup from 'yup'
import api from '../../api/api'
import Header from '../header/headerinicial'
import {useAuth} from '../../Auth/AuthContext'

const schema = yup.object().shape({
    curso: yup.string().required("Por favor digite o curso").min(2, "Muito curto"),
    instituicao: yup.string().required("Por favor digite a instituicao").min(2, "Muito curto"),
    conclusao: yup.string().required("Por favor digite a Data").min(10, "Muito curto"),
    situacao: yup.string().required("Por favor digite a situacao").min(2, "Muito curto"),
  
})

const initialValues = {
    curso: '',
    instituicao: '',
    conclusao: '',
    situacao: '',
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

function School() {  

  const { cpf } = useAuth();

  const formal = useFormal(initialValues, {
    schema,
    onSubmit: async values => {
      const curso = values['curso']
      const instituicao = values['instituicao']
      const conclusao = values['conclusao']
      const situacao = values['situacao']
      
      try {
        const resposta = await api.post("/school", {curso, instituicao, conclusao, situacao, id_cpf : cpf})
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
        <Text style={styles.titulo}>Cadastre Escolaridade e Idiomas</Text>
        <Field {...formal.getFieldProps('curso')} placeholder="Curso" />
        <Field {...formal.getFieldProps('instituicao')} placeholder="Instituição" />
        <Field {...formal.getFieldProps('conclusao')} placeholder="Data Conclusão" />
        <Field {...formal.getFieldProps('situacao')} placeholder="Situação" />
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

export default School;
