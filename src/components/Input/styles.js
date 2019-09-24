import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 25px;
  margin-bottom: 20px;
  height: 60px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  font-size: 15px;
`;
