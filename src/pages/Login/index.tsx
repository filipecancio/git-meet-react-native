import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container,Label,Input,Submit,Subtitle } from './styles';


const index: React.FC = () => {
      const nothing = ()=>{}
      return (
        <>
            <Container>
              <StatusBar style="auto" />
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