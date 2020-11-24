import React, {useState} from 'react';
import { Text } from 'react-native';
import { Container, CustomButton, CustomButtonText, InputArea, SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold } from './styles';
import {useNavigation} from '@react-navigation/native'

import Api from '../../Api';

import SignInput from '../../components/SignInput';

import BarberLogo from '../../assets/barber.svg'
import LockIcon from '../../assets/lock.svg';
import EmailIcon from '../../assets/email.svg';

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignCLick = async ()=> {

        if(emailField !="" && passwordField != ""){

            let json = await Api.signIn(emailField, passwordField);
            if(json.token){
                alert("DEU CERTO!") //TO DO

            }
            else{
                alert("Email e/ou senha errados!")
            }
    
        }
        else{
            alert("Preencha os campos!")
        }


        
    }
   const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }
    return (
        <Container>
            <BarberLogo width="100%" height="160" />
            <InputArea>
                <SignInput
                    IconSvg={EmailIcon}
                    placeholder="Digte seu email"

                    value= {emailField}
                    onChangeText={t=>setEmailField(t)}
                />
                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digte sua senha"
                    value= {passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignCLick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

                <SignMessageButton onPress={handleMessageButtonClick}>
                    <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
                </SignMessageButton>
            </InputArea>
        </Container>

    )
}