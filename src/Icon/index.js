/* eslint-disable import/no-unresolved, import/extensions */
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
/* eslint-enable import/no-unresolved, import/extensions */

const propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  size: PropTypes.number,
  color: PropTypes.string,
  /**
   * Name of Icon set that should be use. From react-native-vector-icons
   */
  iconSet: PropTypes.string,
};
const defaultProps = {
  size: null,
  color: null,
  style: null,
  iconSet: null,
};

const getIconComponent = iconSet => {
  switch (iconSet) {
    case 'Entypo':
      return Entypo;
    case 'EvilIcons':
      return EvilIcons;
    case 'Feather':
      return Feather;
    case 'FontAwesome':
      return FontAwesome;
    case 'Foundation':
      return Foundation;
    case 'Ionicons':
      return Ionicons;
    case 'MaterialIcons':
      return MaterialIcons;
    case 'MaterialCommunityIcons':
      return MaterialCommunityIcons;
    case 'Octicons':
      return Octicons;
    case 'Zocial':
      return Zocial;
    case 'SimpleLineIcons':
      return SimpleLineIcons;
    default:
      return MaterialIcons;
  }
};
const contextTypes = {
  uiTheme: PropTypes.object.isRequired, // eslint-disable-line
};

class Icon extends PureComponent {
  render() {
    const { name, style, size, color } = this.props;
    const { uiTheme } = this.context;
    const { palette, spacing } = uiTheme;
    const { name, style, size, color, iconSet } = this.props;

    const iconColor = color || palette.secondaryTextColor;
    const iconSize = size || spacing.iconSize;
    const VectorIcon = getIconComponent(iconSet || uiTheme.iconSet);

    return (
      <VectorIcon name={name} size={iconSize} color={iconColor} style={style} />
    );
  }
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
Icon.contextTypes = contextTypes;

export default Icon;
