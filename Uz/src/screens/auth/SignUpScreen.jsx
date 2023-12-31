import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS, FONTSIZE} from '../../theme/theme';
import GradientButton from '../../components/GradentButton';
import CustomTextInput from '../../components/CustomTextInput';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.screenContainer}>
      <Text
        style={{
          fontSize: FONTSIZE.font_size_1,
          color: COLORS.primary,
          textTransform: 'uppercase',
          letterSpacing: 15,
        }}>
        SignUp
      </Text>
      <Text style={{fontSize: 10, color: COLORS.accent, fontWeight: 'normal'}}>
        Welcome to Unityzen
      </Text>

      <CustomTextInput
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />

      <CustomTextInput
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <CustomTextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <View style={{alignItems: 'flex-end', gap: 10, marginBottom: 30}}>
        <GradientButton title={'Signup'} filled={true} size={300} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Text>Already have account ? Login </Text>
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
