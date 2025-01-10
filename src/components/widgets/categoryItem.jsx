import {Text} from 'react-native';
import React from 'react';
import categoryItemStyle from '../../styles/widget/categoryItemStyle';
import {TouchableOpacity} from 'react-native';

const CategoryItem = ({item}) => {
  return (
    <TouchableOpacity style={categoryItemStyle.container}>
      <Text style={categoryItemStyle.name}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
