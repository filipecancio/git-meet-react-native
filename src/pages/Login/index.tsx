import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container,Logo,Label,Input,Submit,Subtitle } from './styles';
import logo from '../../util/png/logo.png';
import {useNavigation} from "@react-navigation/native";


const index: React.FC = () => {
  const {navigate} = useNavigation();
  const nextPage = ()=>{navigate('User');}

  return (
    <>
        <Container>
          <StatusBar style="auto" />
          <Logo source={logo}/>
          <Label>
            github nickname:
          </Label>
          <Input placeholder="type here"/>
          <Submit onPress={nextPage}>
            <Subtitle>
              login
            </Subtitle>
          </Submit>
        </Container>
    </>
  );
}     

export default index;