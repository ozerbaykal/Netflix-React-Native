import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/themeColors';
import buttonStyle from '../../styles/componentsStyle/buttonStyle';

const Button = props => {
  const {title, status} = props;

  const SetColor = () => {
    switch (status) {
      case 'primary':
        return ThemeColors.RED;

      default:
        return ThemeColors.BLACK;
    }
  };

  return (
    <TouchableOpacity
      {...props}
      style={[buttonStyle.container, {backgroundColor: SetColor()}]}>
      <Text style={buttonStyle.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
