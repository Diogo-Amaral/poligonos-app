import React, {Component} from 'react';

import {Alert, Keyboard} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from '../../components/Background';
import api from '../../services/api';

export default class Triangle extends Component {
  static navigationOptions = {
    title: 'Adicionar Triângulo',
  };

  state = {
    base: '',
    altura: '',
  };

  handleAddTriangle = async () => {
    try {
      const {base, altura} = this.state;

      await api.post(`/retangulo`, {
        base: parseFloat(base),
        altura: parseFloat(altura),
      });

      this.setState({base: '', altura: ''});
      Keyboard.dismiss();
      Alert.alert('Sucesso!');
    } catch (error) {
      console.tron.log(error);
      Alert.alert('Algo deu errado!');
    }
  };

  render() {
    const {base, altura} = this.state;
    return (
      <Background>
        <Input
          placeholder="Digite a base"
          keyboardType="numeric"
          returnKeyType="next"
          value={base}
          onChangeText={text => this.setState({base: text})}
        />
        <Input
          placeholder="Digite a altura"
          keyboardType="numeric"
          value={altura}
          onChangeText={text => this.setState({altura: text})}
        />
        <Button onPress={this.handleAddTriangle}>Salvar</Button>
      </Background>
    );
  }
}
