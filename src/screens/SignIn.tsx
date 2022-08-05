import React, {FC, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
  Keyboard,
} from 'react-native';
import {TextButton, TextField} from '../components';
import * as Animatable from 'react-native-animatable';

import {RootStackParamList} from '../navigation/NavigationTypes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AppBackground from '../AppBackground';
import {scale, ScaledSheet} from 'react-native-size-matters';

type Props = NativeStackScreenProps<RootStackParamList>;

const {height, width} = Dimensions.get('screen');

const SignIn: FC<Props> = ({navigation}) => {
  const [inputs, setInputs] = useState({
    phone: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    phone: '',
    password: '',
  });

  const handleInputs = (text: string, input: string) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const Validate = () => {
    Keyboard.dismiss();
    let valid = true;
    /////////////phone
    if (!inputs.phone) {
      handleError('Please Enter Your Phone Number', 'phone');
      valid = false;
    } else if (isNaN(Number(inputs.phone))) {
      handleError('Phone Number must be numeric', 'phone');
      valid = false;
    } else if (inputs.phone.length < 11 || inputs.phone.length > 11) {
      handleError('Please enter a valid phone number', 'phone');
      valid = false;
    } else {
      handleError('', 'phone');
      valid = true;
    }
    /////////////password
    if (!inputs.password) {
      handleError('Please Enter Your Password', 'password');
      valid = false;
    } else if (inputs.password.length < 4) {
      handleError('Please Enter a valid password', 'password');
      valid = false;
    } else {
      handleError('', 'password');
      valid = true;
    }
    if (valid) {
      Login();
    }
  };

  const handleError = (errorMessage: string, input: string) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };

  const Login = async () => {
  };
  
  return (
    <View>
      <AppBackground />
      <View style={Styles.container}>
        <Text style={Styles.signIn}>Sign in</Text>
        <TextField
          label="Phone Number"
          onChangeText={text => handleInputs(text, 'phone')}
          error={errors.phone}
        />

        <TextField
          label="Password"
          onChangeText={text => handleInputs(text, 'password')}
          secureTextEntry
          error={errors.password}
        />

        <TouchableOpacity>
          <Text style={Styles.forgotPassword}>Forgot Your Password?</Text>
        </TouchableOpacity>
        <TextButton text="Log In" type="long" onPress={Validate} />
        <Text style={Styles.or}>or</Text>

        <View style={Styles.logo}>
          <TouchableOpacity>
            <Image
              style={[Styles.icon, {marginRight: scale(25)}]}
              source={require('../../assets/icons/facebook.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={Styles.icon}
              source={require('../../assets/icons/google.png')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: scale(24),
            marginTop: scale(25),
          }}>
          <Text style={{color: '#A9A9A9', marginRight: scale(15)}}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: '#B22222'}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const Styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    marginVertical: '20%',
  },
  image: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  errorMessage: {
    color: '#D0342C',
    fontWeight: 'bold',
    width: width / 1.2,
    marginVertical: -10,
  },
  signIn: {
    color: '#F0F5F9',
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: scale(90),
    alignSelf: 'center',
  },
  forgotPassword: {
    color: '#B22222',
    marginBottom: '25@s',
    marginTop: '-10@s',
    fontSize: 13,
    alignSelf: 'flex-end',
    marginRight: '30@s',
    borderBottomColor: '#B22222',
    borderBottomWidth: 1,
  },
  or: {
    color: '#A9A9A9',
    alignSelf: 'center',
    marginBottom: '30@s',
    marginTop: '30@s',
  },
  icon: {
    resizeMode: 'contain',
    height: '40@s',
    width: '40@s',
    marginVertical: 12,
  },
});
