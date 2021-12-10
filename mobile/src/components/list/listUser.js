import React, {useState, useEffect} from 'react';
import api from '../../api/api'
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {Snackbar, DataTable, IconButton, Colors, Card, Title, Paragraph, Button} from 'react-native-paper';
import EditModal from '../modal/modalUser';



const Listar = () => {
    const [user,
        setUser] = useState([]);

    const [hasAlert,
        setAlert] = useState(false);

    const [isEditing,
        setIsEditing] = useState(false);

    const updateList = () => {
        api
            .get('/editableUser')
            .then(res => {
                setUser(res.data);
            })
            .catch(err => {
                setAlert(err.response.data)
            })
    }

    const deleteUser = (cpf) => {
        api
            .delete(`/editableUser/${cpf}`)
            .then(res => {
                setAlert('Deletado com sucesso');
                updateList();
            })
            .catch(err => {
                setAlert("Usuário possue habilidades cadastradas");
            })
    }

    const CardUser = ({cpf, nome, cargo, email}) => (
        <Card style={styles.card}>
          <Card.Title title={nome}/>
          <Card.Content>
            <Paragraph>Email: {email}</Paragraph>
            <Paragraph>CPF: {cpf}</Paragraph>
            <Paragraph>Cargo: {cargo}</Paragraph>
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
                    onPress={() => deleteUser(cpf)}/>

                <IconButton
                    icon="square-edit-outline"
                    color={Colors.blue500}
                    size={20}
                    style={{
                    marginLeft: -5
                }}
                    onPress={() => setIsEditing({cpf, nome, cargo, email})}/>
          </View>
          </Card.Actions>
        </Card>
      );

    useEffect(updateList, []);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Editar Cadastro de Usuário!</Text>
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
        backgroundColor: '#d4a373', 
        borderWidth: 1,
        borderRadius: 10,
    },
    card: {
        backgroundColor: '#d4a373', 
        borderRadius: 20,
        borderWidth: 1,
        marginTop: 2,
    }
});

export default Listar;