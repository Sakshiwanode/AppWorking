import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {isDarkTheme, theme} from '../../../Redux/AuthSlice';
import {Colors, FontSize} from '../../../constants/Colors';
import Header from '../../../constants/Header';
import * as Progress from 'react-native-progress';

const YourLoanScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  const horizontalCards = [
    {id: '1', name: 'Loan EMI', screen: 'LoanEMI'},
    {id: '2', name: 'Repayment Progress', screen: 'RepaymentProgress'},
    {id: '3', name: 'Calculate EMI', screen: 'EMICalculator'},
  ];

  const renderHorizontalCard = ({item}: any) => (
    <TouchableOpacity
      style={[
        styles.smallCard,
        {
          backgroundColor: isDarkMode
            ? Colors.darkInputBackground
            : Colors.cardBackground,
        },
      ]}
      onPress={() => navigation.navigate(item.screen)}>
      <Text
        style={[
          styles.smallCardText,
          {color: isDarkMode ? Colors.white : Colors.black},
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const progress = 0.6;

  return (
    <View
      style={[
        styles.container,
        
      ]}>
      <View style={styles.headerWrapper}>
        <Header navigation={navigation} />
       
      </View>

    <View>
      <Text
        style={[
          styles.loanIdHeading,
          {color: isDarkMode ? Colors.white : Colors.black},
        ]}>
        PFL-PL/22/PDL/0000001
      </Text>
      </View>

      <View
        style={[
          styles.card,
         
        ]}>
        <View style={styles.row}></View>
          <Progress.Circle
            progress={progress}
            size={200}
            thickness={8}
            color={Colors.green}
            unfilledColor={Colors.white}
            borderWidth={0}
            style={{marginTop:30,marginBottom:-30}}
          />

          <Text
            style={[
              styles.heading,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Loan Amount
          </Text>
          <Text
            style={[
              styles.headingsub,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            $3,455,677
          </Text>
       

        <View style={styles.row}>
          <Text
            style={[
              styles.rowText,
              
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Monthly Repayment: $230,000
          </Text>
          <Text
            style={[
              styles.rowText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Balance: $345,566
          </Text>
        </View>
      </View>

      {/* Horizontal Cards */}
      <FlatList
        data={horizontalCards}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderHorizontalCard}
        contentContainerStyle={styles.horizontalList}
      />

      {/* Repayment History Section */}
      <View>
      <Text
        style={[
          styles.sectionHeading,
          {color: isDarkMode ? Colors.white : Colors.black},
        ]}>
        Repayment History
      </Text>
      </View>
      <View
        style={[
          styles.Paymentcard,
          {
            backgroundColor: isDarkMode
              ? Colors.darkInputBackground
              : Colors.cardBackground,
          },
        ]}>
        <Text
          style={[
            styles.historyText,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          March Repayment
        </Text>
        <View style={styles.row}>
          <Text
            style={[
              styles.rowText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Date: 23/12/2024
          </Text>
          <Text
            style={[
              styles.rowText,
              {color: isDarkMode ? Colors.white : '#FFA500'},
            ]}>
            Amount: $3,445,557
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.Paymentcard,
          {
            backgroundColor: isDarkMode
              ? Colors.darkInputBackground
              : Colors.cardBackground,
          },
        ]}>
        <Text
          style={[
            styles.historyText,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          March Repayment
        </Text>
        <View style={styles.row}>
          <Text
            style={[
              styles.rowText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Date: 23/12/2024
          </Text>
          <Text
            style={[
              styles.rowText,
              {color: isDarkMode ? Colors.white :'#FFA500'},
            ]}>
            Amount: $3,445,557
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.Paymentcard,
          {
            backgroundColor: isDarkMode
              ? Colors.darkInputBackground
              : Colors.cardBackground,
          },
        ]}>
        <Text
          style={[
            styles.historyText,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          March Repayment
        </Text>
        <View style={styles.row}>
          <Text
            style={[
              styles.rowText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Date: 23/12/2024
          </Text>
          <Text
            style={[
              styles.rowText,
              {color: isDarkMode ? Colors.white :'#FFA500'},
            ]}>
            Amount: $3,445,557
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.Paymentcard,
          {
            backgroundColor: isDarkMode
              ? Colors.darkInputBackground
              : Colors.cardBackground,
          },
        ]}>
        <Text
          style={[
            styles.historyText,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          March Repayment
        </Text>
        <View style={styles.row}>
          <Text
            style={[
              styles.rowText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Date: 23/12/2024
          </Text>
          <Text
            style={[
              styles.rowText,
              {color: isDarkMode ? Colors.white : '#FFA500'},
            ]}>
            Amount: $3,445,557
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
  },

  loanIdHeading: {
    marginTop: 10,
    fontSize:23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    borderRadius: 8,
    padding: 4,
    marginTop: 20,
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:9,
    backgroundColor:Colors.lavenderwhite,
  },
  Paymentcard: {
   
    borderRadius: 8,
    padding: 10,
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  marginBottom:5,
    marginHorizontal:9,
  },
  heading: {
    bottom: 100,
    fontSize: FontSize.large,
    textAlign: 'center',
    marginBottom: 0,
  },
  headingsub: {
    alignSelf: 'center',
    bottom: 100,
    fontWeight: 'bold',
    fontSize: FontSize.heading,
  },

  row: {
    marginBottom:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowText: {
   fontWeight:'bold',
    fontSize: FontSize.medium,
    paddingRight:10,
   
  },
  horizontalList: {
    marginHorizontal:10,
    marginVertical:16,
  },
  smallCard: {
    marginTop:10,
    width: 120,
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 9,
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  smallCardText: {
    fontSize: FontSize.medium,
    textAlign: 'center',
  },
  sectionHeading: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
   marginTop
   :-30,
    paddingLeft:5,
  },
  historyText: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  headerWrapper: {
    position: 'absolute',
    top: 3,
    left: 0,
    right: 0,
  },
});
export default YourLoanScreen;
