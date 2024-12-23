import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useColorScheme } from 'react-native';
import { isDarkTheme, theme } from '../../Redux/AuthSlice';
import { Colors, FontSize } from '../../constants/Colors';
import Header from '../../constants/Header';

const AadharScreen = ({ navigation }: any) => {
  const [aadharNumber, setAadharNumber] = useState('');
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground },
      ]}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.topSection}>
        <Image
          source={require('../../images/adharotp.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.headerWrapper}>
          <Header navigation={navigation} />
        </View>
      </View>

      <View
        style={[
          styles.bottomSection,
          {
            backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground,
          },
        ]}
      >
        <Text
          style={[
            styles.title,
            { color: isDarkMode ? Colors.primary : Colors.primary },
          ]}
        >
          Verify Your Identity
        </Text>

        {/* PAN Section */}
        <Text
          style={[
            styles.panHeading,
            { color: isDarkMode ? Colors.primary : Colors.primary },
          ]}
        >
          PAN
        </Text>
        <View style={styles.panSection}>
          <TouchableOpacity style={styles.roundedUploadIcon}>
            <Image
              source={require('../../images/BankDocument.png')}
              style={[styles.uploadIconImage,
                {borderColor: isDarkMode ? Colors.blue : Colors.gray},
                {backgroundColor:isDarkMode?Colors.black:Colors.white},
              ]}
            />
          </TouchableOpacity>
          <Text style={styles.orText}>OR</Text>
          <TextInput
            style={[
              styles.inputField,
              {
                flex: 1,
                marginLeft: 10,
                backgroundColor: isDarkMode ? Colors.black : Colors.lightInputBackground,
                color: isDarkMode ? Colors.white : Colors.black,
                borderColor: isDarkMode ? Colors.blue : Colors.gray,
              },
            ]}
            placeholder="Enter PAN number"
            placeholderTextColor={isDarkMode ? Colors.placeholderDark : Colors.placeholderLight}
            maxLength={10}
          />
        </View>

        <Text
          style={[
            styles.subtitle,
            { color: isDarkMode ? Colors.lightGray : Colors.black },
          ]}
        >
          Enter your Aadhar details below.
        </Text>

        {/* Aadhar Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Aadhar Number</Text>
          <TextInput
            style={[
              styles.inputField,
              {
                backgroundColor: isDarkMode ? Colors.black : Colors.lightInputBackground,
                color: isDarkMode ? Colors.white : Colors.black,
                borderColor: isDarkMode ? Colors.blue : Colors.gray,
              },
            ]}
            placeholder="Enter your 12-digit Aadhar number"
            placeholderTextColor={isDarkMode ? Colors.placeholderDark : Colors.placeholderLight}
            keyboardType="numeric"
            maxLength={12}
            value={aadharNumber}
            onChangeText={setAadharNumber}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.submitButton,
            { backgroundColor: isDarkMode ? Colors.black : Colors.primary },
            {borderColor: isDarkMode ? Colors.blue : Colors.gray},
          ]}
          onPress={() => navigation.navigate('AadharOTP')}
        >
          <Text
            style={[
              styles.submitButtonText,
              { color: isDarkMode ? Colors.white : Colors.white },
            ]}
          >
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 0.4, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  headerWrapper: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
  },
  bottomSection: {
    flex: 0.6,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: FontSize.heading,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: FontSize.medium,
    marginVertical: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: FontSize.large,
    color: Colors.primary,
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: FontSize.medium,
    padding: 13,
  },
  submitButton: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
  panHeading: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
    marginTop:10,
  },
  panSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  roundedUploadIcon: {
    top:5,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  uploadIconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: FontSize.medium,
    color: Colors.mediumGray,
  },
});

export default AadharScreen;
