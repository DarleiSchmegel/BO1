import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';

import welcomeImage from '../assets/Welcome-image.jpg';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome({}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  backgroundColor={colors.green} />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Gerencie suas pesagens de forma fácil!</Text>
        <Image
          source={welcomeImage}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>
          Não se perca mais nas suas contas. Nós cuidamos de lembrar você sempre
          que precisar.
        </Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.75}
          // onPress={handleStart}>
        >
          <Text>></Text>
          {/* <Feather name="chevron-right" style={styles.buttonIcon} /> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
    fontWeight: 'bold',
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },

  image: {
    // height: Dimensions.get('window').width * 0.7,
    height: 292,
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 16,
    height: 56,
    width: 56,
  },

  buttonIcon: {
    fontSize: 32,
    color: colors.white,
  },
});
