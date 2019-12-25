/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  Keyboard,
} from 'react-native';

export default function Main() {
  const [offset] = React.useState(new Animated.ValueXY({x: 0, y: 100}));
  const [opacity] = React.useState(new Animated.Value(0));
  const [logo] = React.useState(new Animated.ValueXY({x: 60, y: 60}));

  React.useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: -120,
        speed: 4,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 2500,
      }),
    ]).start();
  }, [keyboardDidHide, keyboardDidShow, offset.y, opacity]);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 30,
        duration: 200,
      }),
      Animated.timing(logo.y, {
        toValue: 30,
        duration: 200,
      }),
      Animated.spring(offset.y, {
        toValue: 30,
        speed: 4,
        bounciness: 5,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 60,
        duration: 200,
      }),
      Animated.timing(logo.y, {
        toValue: 60,
        duration: 200,
      }),
      Animated.spring(offset.y, {
        toValue: -120,
        speed: 2,
        bounciness: 5,
      }),
    ]).start();
  }
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logoContainer}>
        <Animated.View style={[styles.logo, {width: logo.x, height: logo.y}]} />
      </View>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
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
