import {DOWNLOADS, HOME, NEWHOT, SEARCH} from '../../utils/routes';
import {
  DocumentDownload,
  Home2,
  MessageQuestion,
  SearchNormal,
  VideoPlay,
} from 'iconsax-react-native';

const TabBarIcon = ({route, color, size, focused}) => {
  switch (route.name) {
    case HOME:
      return (
        <Home2
          color={color}
          size={size}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case NEWHOT:
      return (
        <VideoPlay
          color={color}
          size={size}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case SEARCH:
      return (
        <SearchNormal
          color={color}
          size={size}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case DOWNLOADS:
      return (
        <DocumentDownload
          color={color}
          size={size}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );

    default:
      <MessageQuestion variant={focused ? 'Bold' : 'Outline'} />;
  }
};

export default TabBarIcon;
