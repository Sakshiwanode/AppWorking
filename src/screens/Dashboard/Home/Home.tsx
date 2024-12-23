import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {Carousel} from 'react-native-basic-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, FontSize} from '../../../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {isDarkTheme, theme} from '../../../Redux/AuthSlice';
import {ScrollView} from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  const carouselData = [
    {
      title: 'Upcoming Emi',
      subtitle1: 'Due Date',
      subtitle2: 'Due Amount',
      date: '2024-12-20',
      amount: '$500',
    },
    {
      title: 'Loan OverDue',
      subtitle1: 'Past Due',
      subtitle2: 'Due Amount',
      date: '2024-12-15',
      amount: '$700',
    },
    {
      title: 'Requested Loan',
      subtitle1: 'Requested Loan',
      subtitle2: 'Requested Loan',
      date: '2024-12-25',
      amount: '$1000',
    },
  ];

  const loanDraws = [
    {
      id: '1',
      name: 'Personal Loan',
      status: 'Approved',
      duration: '12 Months',
      progress: 75,
    },
    {
      id: '2',
      name: 'Car Loan',
      status: 'Pending',
      duration: '6 Months',
      progress: 50,
    },
  ];

  const renderLoanDrawsCard = ({item}: any) => {
    const filledColor =
      item.progress >= 75
        ? Colors.green
        : item.progress >= 50
        ? Colors.green
        : Colors.green;

    const unfilledColor = item.progress >= 30 ? Colors.white : Colors.accent;

    return (
      <View style={[styles.loanDrawCard]}>
        <View
          style={{
            width: 80,
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Progress.Circle
            progress={item.progress / 100}
            style={{marginTop: 70}}
            size={120}
            thickness={5}
            color={filledColor}
            unfilledColor={unfilledColor}
            borderWidth={0}
          />
          <Text style={styles.progressText}>{`${item.progress}%`}</Text>
        </View>

        <View style={styles.loanDetails}>
          <Text
            style={[
              styles.boldText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            {item.name}
          </Text>
          <Text
            style={[
              styles.loanStatusText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            {item.status}
          </Text>
          <Text
            style={[
              styles.loanDurationText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            {item.duration}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        {/* Icons Row */}
        <View style={styles.iconsRow}>
          <Icon name="menu-outline" size={30} color="#000" />
          <Text style={styles.welcomeText}>Welcome User</Text>
          <Icon name="notifications-outline" size={30} color="#000" />
        </View>
        </View>

      <ScrollView style={{marginBottom:-150,}}>
        <Carousel
          data={carouselData}
          renderItem={({item}: any) => (
            <View style={styles.carouselCard}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>
                {item.subtitle1}: {item.date}
              </Text>
              <Text style={styles.cardSubtitle}>
                {item.subtitle2}: {item.amount}
              </Text>
            </View>
          )}
          itemWidth={400}
          style={{height: 350,}}
          horizontal
          autoplay
          paginationType='circle'
          
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.roundedButton}>
            <Icon name="cash-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundedButton}>
            <Icon name="business-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundedButton}>
            <Icon name="send-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonLabelsRow}>
          <Text style={styles.buttonLabel}>Personal Loan</Text>
          <Text style={styles.buttonLabel}>Business Loan</Text>
          <Text style={styles.buttonLabel}>Apply Loan</Text>
        </View>
    
     

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={[styles.subHeadingactiveloan]}>Your Active Draws</Text>
          <Text
            style={{
              textDecorationLine: 'underline',
              paddingRight: 10,
              bottom:-4,
            }}
            onPress={() => navigation.navigate('ActiveLoan')}>
            View All
          </Text>
        </View>

        <FlatList
          data={loanDraws}
          renderItem={renderLoanDrawsCard}
          keyExtractor={(item: any) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.loanDrawsList}
        />
      </View>
      <View>
        <Text style={styles.subTextHeading}>Other Details</Text>
        <FlatList
          data={[
            {
              id: '1',
              title: 'Repayment History',
              description: 'View all transactions',
              icon: 'time-outline',
              navigateTo: 'LoanEMI',
              iconStyle: styles.iconLeftclock,
            },
            {
              id: '2',
              title: 'Closed Loans',
              description: 'View Closed Loans',
              icon: 'checkmark-circle',
              navigateTo: 'ClosedLoan',
              iconStyle: styles.iconLeft,
            },
            {
              id: '3',
              title: 'Upcoming EMI',
              description: 'View Upcoming EMI',
              icon: 'hand-left',
              navigateTo: 'UpcomingEmi',
              iconStyle: styles.iconLefthand,
            },
          ]}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.card,
                {
                  backgroundColor: isDarkMode
                    ? Colors.cardBackgroundDark
                    : Colors.cardBackground,
                },
              ]}
              onPress={() => navigation.navigate(item.navigateTo)}>
              <View style={styles.rows}>
                <View>
                  <Ionicons
                    name={item.icon}
                    size={30}
                    color={Colors.green}
                    style={item.iconStyle}
                  />
                </View>
                <View style={styles.quickActionText}>
                  <Text
                    style={{color: isDarkMode ? Colors.white : Colors.black}}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: isDarkMode ? Colors.white : Colors.black,
                    }}>
                    {item.description}
                  </Text>
                </View>
                

                <View>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={24}
                    color={Colors.black}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topSection: {
    flex: 0.1,
    backgroundColor: '#fcfbfb',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    padding: 15,
    alignItems: 'center',
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 45,
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  carouselCard: {
    backgroundColor:'#daf0da',
    // backgroundColor: Colors.lavenderwhite,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 10,
    elevation: 10,
    marginVertical: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#555',
    fontWeight: 'bold',
  },
  buttonRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  roundedButton: {
    backgroundColor: '#ffae42',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 5,
  },
  buttonLabel: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  bottomSection: {
    flex: 0.9,
  },
  bottomHeading: {
    fontSize: 21,
    padding: 10,

    marginVertical: 10,
  },

  subHeadingactiveloan: {
    marginBottom: -10,
    padding: 10,
    fontSize: 21,
  },

  loanDrawsList: {
    paddingHorizontal: 9,
  },

  loanDrawCard: {
    marginTop: 10,
    padding: 15,
    margin: 10,
    borderRadius: 8,
    backgroundColor: Colors.lavenderwhite,
    alignItems: 'center',
    height: 230,
    width: 170,
    elevation:5,
  },

  boldText: {
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: FontSize.medium,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  progressText: {
    bottom: 65,
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    color: Colors.black,
  },
  loanDetails: {
    alignItems: 'center',
  },
  loanStatusText: {
    fontSize: FontSize.small,
  },
  loanDurationText: {
    fontSize: FontSize.small,
  },
  quickActionText: {
    // paddingRight: 6,
  },
  subTextHeading: {
    fontSize: 21,
    paddingLeft: 10,
  },
  card: {
    borderRadius: 8,

    backgroundColor: Colors.lavenderwhite,
    alignItems: 'center',
    marginVertical: 6,
    marginHorizontal: 8,
    padding: 6,
    elevation:2,
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconLeftclock: {
    paddingRight: 80,
  },
  iconLeft: {
    paddingRight: 90,
  },
  iconLefthand: {
    paddingRight: 80,
    paddingBottom: 1,
  },
});

export default HomeScreen;
