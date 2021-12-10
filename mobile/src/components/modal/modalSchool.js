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
        setFormData] = useState({id: props.data.id || '', curso: props.data.curso || '', instituicao: props.data.instituicao || '', conclusao: props.data.conclusao.substring(0, 10) || '', situacao: props.data.situacao ||'', id_cpf: props.data.id_cpf || '', nome: props.data.nome || '',});

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
            .put(`/editableSchool/${formData.id}`, {
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
                    onChangeText={text => onInputChange('id', text)}
                    value={formData
                    .id
                    .toString()}
                    style={{
                    height: 55,
                    flex: 1,
                    marginBottom: 10
                }}
                    label="ID"
                    mode="outlined"/>
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    onChangeText={text => onInputChange('curso', text)}
                    value={formData
                    .curso
                    .toString()}
                    style={{
                    height: 55,
                    flex: 1,
                    marginBottom: 10
                }}
                    label="Curso"
                    mode="outlined"/>
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    onChangeText={text => onInputChange('instituicao', text)}
                    value={formData
                    .instituicao
                    .toString()}
                    style={{
                    height: 55,
                    flex: 1,
                    marginBottom: 10
                }}
                    label="Instituição"
                    mode="outlined"/>
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    onChangeText={text => onInputChange('conclusao', text)}
                    value={formData
                    .conclusao.substring(0, 10)
                    .toString()}
                    style={{
                    height: 55,
                    flex: 1,
                    marginBottom: 10
                }}
                    label="Conclusão"
                    mode="outlined"/>
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    onChangeText={text => onInputChange('situacao', text)}
                    value={formData
                    .situacao
                    .toString()}
                    style={{
                    height: 55,
                    flex: 1,
                    marginBottom: 10
                }}
                    label="Situação"
                    mode="outlined"/>
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    onChangeText={text => onInputChange('id_cpf', text)}
                    value={formData
                    .id_cpf
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