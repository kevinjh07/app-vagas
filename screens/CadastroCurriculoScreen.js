import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { TextInput, Button } from 'react-native-paper';

import HeaderModal from '../components/HeaderModal';

export default function CadastroCurriculoScreen({ navigation, route }) {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [cidade, setCidade] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [celular, setCelular] = useState('');
  const [funcao, setFuncao] = useState('');
  const [salario, setSalario] = useState('');

  const actionSalvar = () => {
    alert('Currículo cadastrado com sucesso!');
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderModal
          titulo="Cadastro de Currículo"
          acaoVoltar={() => navigation.goBack()}
        />

        <View style={styles.inputs}>
          <Text>Preencha os campos</Text>
          <TextInput
            placeholder="NOME"
            mode="outlined"
            onChangeText={(text) => setNome(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="DATA DE NASCIMENTO"
            mode="outlined"
            onChangeText={(text) => setData(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="EMAIL"
            mode="outlined"
            onChangeText={(text) => setNome(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="CPF"
            mode="outlined"
            onChangeText={(text) => setNome(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="CIDADE"
            mode="outlined"
            onChangeText={(text) => setNome(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="ESCOLARIDADE"
            mode="outlined"
            onChangeText={(text) => setNome(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="CELULAR"
            mode="outlined"
            onChangeText={(text) => setNome(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="FUNÇÃO PRETENDIDA"
            mode="outlined"
            onChangeText={(text) => setNome(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="PRETENSÃO SALARIAL R$"
            mode="outlined"
            onChangeText={(text) => setNome(text)}
            style={styles.input}
          />

          <View style={{ marginTop: 20 }}>
            <Button icon="camera" mode="contained" onPress={actionSalvar}>
              SALVAR
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    //alignItems: "center"
  },
  inputs: {
    padding: 15,
  },
  input: {
    height: 40,
    width: 250,
  },
});
