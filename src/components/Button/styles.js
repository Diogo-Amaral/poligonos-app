import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 46px;
  background: #e85c00;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
