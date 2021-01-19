import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #F4F7F9;
    flex: 1;
    align-items:center;
    justify-content:center;
`;
export const Logo = styled.Image`
    width: 120px;
    height: 77px;
    margin-bottom: 50px;
    resize-mode:contain;
`;
export const Label = styled.Text`
    width: 300px;
    text-align: left;
    color: #00B1E9;
    font-size: 20px;
`;
export const Input = styled.TextInput`
    background-color: #FFFFFF;
    width: 90%;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
    padding: 10px;
    margin: 5px;
`;
export const Submit = styled.TouchableOpacity`
    background-color: #FA9D76;
    margin: 10px;
    width: 143px;
    height: 40px;
    align-items:center;
    justify-content:center;
    border-radius: 10px;
    align-self: flex-end;
    margin-right: 5%;
`;
export const Subtitle = styled.Text`
    color: #FFFFFF;
    font-size: 20px;
`;