import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const SignIn = ({ navigation }: any) => {
  const handleNext = () => {
   
    navigation.navigate('OTPVerify');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>

      <Image
        source={require('../images/Login.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.instructionText}>
        Please enter your mobile number for verification code
      </Text>

      <View style={styles.inputRow}>
        <View>
          <Text style={styles.phoneInput}>+91</Text>
        </View>
        <TextInput
          style={styles.phoneInput}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          placeholderTextColor="gray"
        />
      </View>

      <Text style={styles.resendText}>Resend OTP</Text>

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginBottom: 20,
  },
  instructionText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dropdownContainer: {
    width: '30%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    bottom: 10,
  },
  phoneInput: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    fontSize: 16,
    padding: 10,
    marginLeft: 10,
  },
  resendText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#51A88E',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#28d3ab',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignIn;
