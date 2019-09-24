import React from 'react';

import {Container} from './styles';
import Button from '../../components/Button';

export default function Main({navigation}) {
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Rectangle')}>
        Retângulo
      </Button>
      <Button onPress={() => navigation.navigate('Triangle')}>Triângulo</Button>
      <Button onPress={() => navigation.navigate('SumAreas')}>
        Soma das áreas
      </Button>
    </Container>
  );
}
