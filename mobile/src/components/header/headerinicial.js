import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';


const Header = () => {
  return (
    <>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>DevDotCom</Text>
      </View>
      <View>
        <View style={styles.separador} />
        <View style={styles.containerTexto}>
          <Text style={styles.textoDescricao}>Bem-Vindo!</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 15
  },
  titulo: {
    fontSize: 28,
  },
  separador: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA',
    margin: 10,
  },
  containerTexto: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  textoDescricao: {
    padding: 24,
    backgroundColor: '#F4F0F4',
    color: '#A1A5AA',
    fontSize: 16,
  },
});

export default Header;