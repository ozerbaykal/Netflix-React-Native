import {FlatList, Text, View} from 'react-native';
import React from 'react';
import {sections} from '../utils/constanst';
import sectionsStyle from '../styles/widget/sectionsStyle';
import Section from '../components/widgets/section';

const Sections = () => {
  return (
    <View style={sectionsStyle.container}>
      <FlatList
        data={sections}
        renderItem={({item}) => <Section item={item} />}
      />
    </View>
  );
};

export default Sections;
