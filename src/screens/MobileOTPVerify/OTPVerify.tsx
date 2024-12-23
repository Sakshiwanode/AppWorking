import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import Header from '../../constants/Header';

const OTP = ({ navigation }: any) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [timer, setTimer] = useState(60);

  
  const inputRefs = useRef<any[]>([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleInputChange = (value: any, index: any) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

   
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus(); 
    }

   
    if (!value && index > 0) {
      inputRefs.current[index - 1].focus();  
    }
  };

  const handleResend = () => {
    setOtp(['', '', '', '']);
    setTimer(60);
  };
  
  const handleNext = () => {
    navigation.navigate('LoanApply');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Header navigation={navigation} />
      </View>
      <Text style={styles.heading}>Enter Verification Code</Text>
      <Text style={styles.Subheading}>Code</Text>

      <Image
        source={require('../../images/otp.jpg')}
        style={styles.image}
      />

      <Text style={styles.instructionText}>Please enter the verification code.</Text>
      <Text style={styles.sentToText}>Sent to +91345546637</Text>

      <View style={styles.otpInputRow}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={[
              styles.otpInput,
              activeIndex === index ? styles.otpInputActive : styles.otpInputInactive,
            ]}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onFocus={() => setActiveIndex(index)}
            onChangeText={(value) => handleInputChange(value, index)}
            ref={(ref) => (inputRefs.current[index] = ref)}  
          />
        ))}
      </View>

      {timer > 0 ? (
        <Text style={styles.timerText}>Resend OTP in {timer}s</Text>
      ) : (
        <Text style={styles.resendText} onPress={handleResend}>
          Didn’t receive the code? <Text style={styles.resendLink}>Resend</Text>
        </Text>
      )}

      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText} onPress={handleNext}>
          Verify the code
        </Text>
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
  headerWrapper: {
    position: 'absolute',
    top: 9,
    left: 0,
    right: 0,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Subheading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  instructionText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 5,
  },
  sentToText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 30,
  },
  otpInputRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  otpInputActive: {
    borderColor: '#28d3ab',
    backgroundColor: '#f0fdf4',
  },
  otpInputInactive: {
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  timerText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  resendText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  resendLink: {
    color: '#51A88E',
    textDecorationLine: 'underline',
  },
  verifyButton: {
    backgroundColor: '#28d3ab',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OTP;
