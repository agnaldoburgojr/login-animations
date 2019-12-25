import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native';

export default function Main() {
  const [offset] = React.useState(new Animated.ValueXY({x: 0, y: 100}));

  React.useEffect(() => {
    Animated.spring(offset.y, {
      toValue: -120,
      speed: 4,
      bounciness: 20,
    }).start();
  }, [offset.y]);
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logoContainer}>
        <View style={styles.logo} />
      </View>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{translateY: offset.y}],
          },
        ]}>
        <TextInput
          placeholder="E-mail"
          autoCorrect={false}
          onChangeText={() => {}}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
          style={styles.input}
        />
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.txtSubmit}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAccount}>
          <Text style={styles.txtAccount}>Criar conta</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
    backgroundColor: '#9982ff',
    borderRadius: 30,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#9982ff',
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  txtSubmit: {
    color: '#fff',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  btnAccount: {
    marginTop: 10,
  },
  txtAccount: {
    color: '#fff',
  },
});
