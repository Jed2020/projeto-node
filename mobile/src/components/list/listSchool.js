import React, {useState, useEffect} from 'react';
import api from '../../api/api'
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {Snackbar, DataTable, IconButton, Colors, Card, Title, Paragraph, Button} from 'react-native-paper';
import EditModal from '../modal/modalSchool';



const Listar = () => {
    const [user,
        setUser] = useState([]);

    const [hasAlert,
        setAlert] = useState(false);

    const [isEditing,
        setIsEditing] = useState(false);

    const updateList = () => {
        api
            .get('/editableSchool')
            .then(res => {
                setUser(res.data);
            })
            .catch(err => {
                setAlert(err.response.data)
            })
    }

    const deleteUser = (id) => {
        api
            .delete(`/editableSchool/${id}`)
            .then(res => {
                setAlert('Deletado com sucesso');
                updateList();
            })
            .catch(err => {
                setAlert("Erro ao deletar");
            })
    }

    const CardUser = ({id, curso, instituicao, conclusao, situacao, id_cpf, nome}) => (
        <Card style={styles.card}>
          <Card.Title title={nome}/>
          <Card.Content>
            <Paragraph>Curso: {curso}</Paragraph>
            <Paragraph>instituicao: {instituicao}</Paragraph>
            <Paragraph>Data Conclusão: {conclusao.substring(0, 10)}</Paragraph>
            <Paragraph>Situação: {situacao}</Paragraph>
            <Paragraph>CPF: {id_cpf}</Paragraph>
            <Paragraph>id: {id}</Paragraph>
          </Card.Content>
          <Card.Actions>
          <View
                style={{
                flexDirection: 'row',
                justifyContent: 'flex-end'
            }}>
                <IconButton
                    icon="delete"
                    color={Colors.red500}
                    size={20}
                    onPress={() => deleteUser(id)}/>

                <IconButton
                    icon="square-edit-outline"
                    color={Colors.blue500}
                    size={20}
                    style={{
                    marginLeft: -5
                }}
                    onPress={() => setIsEditing({id, curso, instituicao, conclusao, situacao, id_cpf, nome})}/>
          </View>
          </Card.Actions>
        </Card>
      );

    useEffect(updateList, []);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Edite sua Escolaridade e Idiomas</Text>
            <FlatList
                data={user}
                renderItem={({item})=> <CardUser { ...item} /> }
            />
            <Snackbar
                visible={hasAlert}
                onDismiss={() => setAlert(false)}
                action={{
                label: 'Ok',
                onPress: () => setAlert(false)
            }}>
                {hasAlert}
            </Snackbar>

           { isEditing ?  
            <EditModal
                isEditing={!!isEditing}
                data={isEditing}
                hideModal={() => setIsEditing(false)}
                updateList={updateList}/>
                 : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 30,
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    titulo: {
        paddingVertical: 15,
        fontSize: 28,
        textAlign: 'center',
        backgroundColor: '#fffd82', 
        borderWidth: 1,
        borderRadius: 10,
    },
    card: {
        backgroundColor: '#fffd82', 
        borderRadius: 20,
        borderWidth: 1,
        marginTop: 2,
    }
});

export default Listar;