import {Provider} from 'react-redux';
import RootNavigation from './src/router/rootNavigation';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
