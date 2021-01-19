import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container,Logo,Label,Input,Submit,Subtitle } from './styles';
import logo from '../../util/png/logo.png';


const index: React.FC = () => {
      const nothing = ()=>{}
      return (
        <>
            <Container>
              <StatusBar style="auto" />
              <Logo source={logo}/>
              <Label>
                github nickname:
              </Label>
              <Input placeholder="type here"/>
              <Submit onPress={nothing}>
                <Subtitle>
                  login
                </Subtitle>
              </Submit>
            </Container>
        </>
      );
    }     

export default index;