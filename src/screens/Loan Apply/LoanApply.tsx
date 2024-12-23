import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../constants/Header';
import * as Progress from 'react-native-progress';

const LoanApplyScreen = ({ navigation }: any) => {
  const handleNext = () => {
    navigation.navigate('EMICalculator');
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View style={styles.topSection}>
        <Image
          source={require('../../images/loanimage.png')}
          style={styles.image}
          resizeMode="contain"
        />
         <View style={styles.headerWrapper}>
        <Header navigation={navigation} />
      </View>
      </View>

      <View style={styles.bottomSection}>

      <Text style={styles.Heading}>Loan Apply</Text>

        <Text style={styles.mainHeading}>Amount</Text>
       

        <View style={styles.inputContainer}>
          <Text style={styles.currencySymbol}>₹</Text>
          <TextInput
            style={styles.loanInput}
            keyboardType="numeric"
            value='5000000'
            editable={false}
          />
        </View>

        <View style={styles.progressRow}>
          <Text style={styles.progressText}>₹100</Text>
          <Progress.Bar
            progress={0.4}
            width={240}
            height={10}
            color="#28d3ab"
            unfilledColor="#e0e0e0"
          />
          <Text style={styles.progressText}>₹10,000,000</Text>
        </View>

        <Text style={styles.mainHeading}>Select Loan Tenure</Text>
       
        <View style={styles.tenureContainer}>
          <Text style={styles.tenureText}>2 Years</Text>
          <Icon name="chevron-down" size={28} color='black' />
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('AadharNoVerify')}
        >
          <Text style={styles.buttonText}>Continue to Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topSection: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 470,
    height: 400,
  },
  headerWrapper: {
    position: 'absolute',
    top: 9,
    left: 0,
    right: 0,
  },
  bottomSection: {
    flex: 0.6,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  Heading:{
    alignSelf:"center",
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    justifyContent:'center',
   
  },

  mainHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subHeading: {
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    marginBottom: 20,
  },
  currencySymbol: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
    color: '#000',
  },
  loanInput: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: '#000',
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  progressText: {
    fontSize: 14,
    color: '#333',
  },
  tenureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 15,
    marginBottom: 20,
  },
  tenureText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  continueButton: {
    backgroundColor: '#28d3ab',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom:10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  cancelText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});

export default LoanApplyScreen;
