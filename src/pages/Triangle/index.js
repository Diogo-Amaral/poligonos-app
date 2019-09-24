import React, {Component} from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from '../../components/Background';

// import { Container } from './styles';

export default class Triangle extends Component {
  static navigationOptions = {
    title: 'Adicionar Triângulo',
  };

  state = {
    base: '',
    altura: '',
  };

  async handleAddTriangle() {}

  render() {
    return (
      <Background>
        <Input
          placeholder="Digite a base"
          keyboardType="numeric"
          returnKeyType="next"
        />
        <Input placeholder="Digite a altura" keyboardType="numeric" />
        <Button>Salvar</Button>
      </Background>
    );
  }
}
