import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import api from '../../api/api'
import {
    Modal,
    Portal,
    Text,
    Button,
    Provider,
    Colors,
    TextInput
} from 'react-native-paper';

const EditModal = props => {

    const [formData,
        setFormData] = useState({cpf: props.data.cpf || '', nome: props.data.nome || '', cargo: props.data.cargo || '', email: props.data.email || ''});

    const [hasError,
        setHasError] = useState(false);

    const [showResult,
        setShowResult] = useState(false);

    const [errorData,
        setErrorData] = useState(false);

    const onInputChange = (label, value) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [label]: value
            }
        });
    }

    const editUser = () => {
        api
            .put(`/editableUser/${formData.cpf}`, {
                ...formData
        })
            .then(res => {
                setHasError(false);
                setShowResult(true);
                props.updateList();
            })
            .catch(err => {
                setHasError(true);
                setErrorData(err.response.data);
            })
    }

    return (
        <Modal
            visible={true}
            onDismiss={props.hideModal}
            contentContainerStyle={styles.container}>
            <View>
                {/* SUCCESS TEXT */}
                {showResult
                    ? <Text
                            style={{
                            color: Colors.green500
                        }}>
                            Editado com sucesso!
                        </Text>
                    : null}

                {/* ERROR TEXT */}
                {hasError
                    ? <Text
                            style={{
                            color: Colors.red500
                        }}>
                            {errorData.message}
                        </Text>
                    : null}

            </View>
            <View style={styles.formContainer}>
                <TextInput
                    onChangeText={text => onInputChange('cpf', text)}
                    value={formData
                    .cpf
                    .toString()}
                    style={{
                    height: 55,
                    flex: 1,
                    marginBottom: 10
                }}
                    label="CPF"
                    mode="outlined"/>
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    onChangeText={text => onInputChange('nome', text)}
                    value={formData
                    .nome
                    .toString()}
                    style={{
                    height: 55,
                    flex: 1,
                    marginBottom: 10
                }}
                    label="Nome"
                    mode="outlined"/>
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    onChangeText={text => onInputChange('cargo', text)}
                    value={formData
                    .cargo
                    .toString()}
                    style={{
                    height: 55,
                    flex: 1,
                    marginBottom: 10
                }}
                    label="Cargo"
                    mode="outlined"/>
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    onChangeText={text => onInputChange('email', text)}
                    value={formData
                    .email
                    .toString()}
                    style={{
                    height: 55,
                    flex: 1,
                    marginBottom: 10
                }}
                    label="Email"
                    mode="outlined"/>
            </View>

            <View style={styles.sendContainer}>
                <Button mode="contained" onPress={editUser}>Editar</Button>
            </View>

        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 0,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: '#fff',
        margin: 40
    },

    colorPrimary: {
        color: 'rgb(98,0,238)'
    },

    colorLight: {
        color: '#a6a6a6'
    },

    formContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    sendContainer: {
        marginVertical: 30
    }
});

export default EditModal;