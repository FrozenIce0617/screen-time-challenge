import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.background.primary};
`;

export const Header = styled.View`
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 64px;
  background-color: ${props => props.theme.background.secondary};
  border-color: ${props => props.theme.border.primary};
`;

export const Typography = styled.Text`
  color: ${props => props.theme.header.primary};
  font-size: 24px;
  font-weight: bold;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 15px;
  padding: 10px 30px;
`;

export const RadioButton = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.isActive ? props.theme.background.buttonActive : 'transparent'};
  border-width: 1px;
  border-color: ${props => props.theme.background.buttonActive};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props =>
    props.isActive ? props.theme.text.buttonActive : props.theme.text.buttonInactive};
`;

export const Button = styled.TouchableOpacity``;

export const StatsContainer = styled.View`
  padding: 10px 30px;
  background-color: ${props => props.theme.background.primary};
`;

export const StatWrapper = styled.View`
  padding: 10px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StatAppName = styled.Text`
  color: ${props => props.theme.text.primary};
  font-size: 16px;
  text-transform: capitalize;
`;

export const StatTime = styled.Text`
  color: ${props => props.theme.text.secondary};
`;
