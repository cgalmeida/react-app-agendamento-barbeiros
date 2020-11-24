import React, {useState} from 'react';
import { Text } from 'react-native';
import { Container, CustomButton, CustomButtonText, InputArea, SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold } from './styles';
import {useNavigation} from '@react-navigation/native'
import BarberLogo from '../../assets/barber.svg'
import SignInput from '../../components/SignInput';


import Api from '../../Api';

import LockIcon from '../../assets/lock.svg';
import EmailIcon from '../../assets/email.svg';
import PersonIcon from '../../assets/person.svg';

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [nameField, setNameField] = useState('');

    const handleSignCLick = async ()=> {
        
        if(nameField !='' && emailField !="" && passwordField != ""){

            let res = await Api.signUp(nameField, emailField, passwordField);
            if(res.token){
                alert("DEU CERTO!") //TO DO

            }
            else{
                alert("Erro: " +res.erro)
            }
    
        }
        else{
            alert("Preencha os campos!")
        }


    }
   const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }
    return (
        <Container>
            <BarberLogo width="100%" height="160" />
            <InputArea>
                <SignInput
                    IconSvg={PersonIcon}
                    placeholder="Digte seu nome"

                    value= {nameField}
                    onChangeText={t=>setNameField(t)}
                />
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
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>

                <SignMessageButton onPress={handleMessageButtonClick}>
                    <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
                </SignMessageButton>
            </InputArea>
        </Container>

    )
}