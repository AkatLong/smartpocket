import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Categories from './screens/Category/Categories';
import Home from './screens/Home/Home';
import CategoryDetails from './screens/Category/CategoryDetails';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { store, persistor } from './store/store';

const DrawerNavigator = createDrawerNavigator();

const CategoryStack = createStackNavigator();

const HomeStack: React.FunctionComponent = () => (
  <CategoryStack.Navigator>
    <CategoryStack.Screen
      name="Home"
      options={{title: 'Smart Pocket'}}
      component={Home}
    />
  </CategoryStack.Navigator>
);

const CatStack: React.FunctionComponent = () => (
  <CategoryStack.Navigator>
    <CategoryStack.Screen
      name="Categories"
      options={{
        title: 'Категории',
      }}
      component={Categories}
    />
    <CategoryStack.Screen name="CategoryDetails" component={CategoryDetails} />
  </CategoryStack.Navigator>
);

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <DrawerNavigator.Navigator>
          <DrawerNavigator.Screen
            name={'Home'}
            component={HomeStack}
            options={{}}
          />
          <DrawerNavigator.Screen name={'Categories'} component={CatStack} />
        </DrawerNavigator.Navigator>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
