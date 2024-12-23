import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Header = ({ navigation }) => {
 
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
     
        <Icon
          name="arrow-back"
          size={24}
          color='black'
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 50, 
    paddingHorizontal: 10,
    justifyContent: 'center', 
    alignItems: 'flex-start', 
  
  },
});

export default Header;
