import React, {Component} from 'react';
import {ActivityIndicator, Alert} from 'react-native';

import {Container, Header, InfoSumAreas} from './styles';
import api from '../../services/api';

export default class SumAreas extends Component {
  static navigationOptions = {
    title: 'Resumo',
  };

  state = {
    sumAreas: '',
    loading: false,
  };

  async componentDidMount() {
    try {
      this.setState({loading: true});
      const response = await api.get(`/soma-areas`);

      this.setState({sumAreas: response.data.mensagem, loading: false});
    } catch (error) {
      console.tron.log(error);
      Alert.alert('Algo deu errado!');
    }
  }

  render() {
    const {sumAreas, loading} = this.state;
    return (
      <Container>
        <Header>Soma das áreas dos polígonos:</Header>
        {loading ? (
          <ActivityIndicator size={50} color="#333" />
        ) : (
          <InfoSumAreas>{sumAreas}</InfoSumAreas>
        )}
      </Container>
    );
  }
}
