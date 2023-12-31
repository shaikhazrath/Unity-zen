import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS, FONTSIZE} from '../../theme/theme';
import GradientButton from '../../components/GradentButton';
import CustomTextInput from '../../components/CustomTextInput';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('')
  return (
    <View style={styles.screenContainer}>
      <Text
        style={{
          fontSize: FONTSIZE.font_size_1,
          color: COLORS.primary,
          textTransform: 'uppercase',
          letterSpacing: 15,
        }}>
        Login
      </Text>
      <Text style={{fontSize: 10, color: COLORS.accent, fontWeight: 'normal'}}>
        Welcome back to Unityzen
      </Text>

      <CustomTextInput
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />

      <CustomTextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <View style={{alignItems: 'flex-end', gap: 10,marginBottom:30}}>
        <GradientButton title={'Login'} filled={true} size={300} />

        <TouchableOpacity>
          <Text>Forget password</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('signup')}>
        <Text>Dont have account ? Signup</Text>
      </TouchableOpacity>
    </View>
  );
  
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});

export default LoginScreen;
