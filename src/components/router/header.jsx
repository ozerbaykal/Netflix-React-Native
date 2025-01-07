import {Text, View} from 'react-native';
import React from 'react';
import headerStyle from '../../styles/componentsStyle/headerStyle';

const Header = () => {
  return (
    <View style={headerStyle.container}>
      <Text>header</Text>
    </View>
  );
};

export default Header;
