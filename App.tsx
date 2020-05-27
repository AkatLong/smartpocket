import 'react-native-gesture-handler';
import React, { PropsWithChildren, ReactNode, ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import Categories from './screens/Category/Categories';
import Home from './screens/Home/Home';
import CategoryDetails from './screens/Category/CategoryDetails';
import { Provider, connect, ConnectedProps } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import Purchases from './screens/Purchase/Purchases';
import PurchaseDetails from './screens/Purchase/PurchaseDetails';
import MainSettings from './screens/Settings/MainSettings';
import { RootState, Theme } from './store/types';
import { changeTheme } from './store/actions/settings';
import { Switch, Text, View, Button, TouchableOpacity } from 'react-native';
import { Label } from './components/ConnectedComponents';
import Modal from './components/Modal';

const mapStateToProps = (state: RootState) => ({
  styles: state.settingsReducer.styles,
  theme: state.settingsReducer.theme
})

const mapDispatchToProps = {
  changeTheme,
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const DrawerNavigator = createDrawerNavigator();

const CategoryStack = createStackNavigator();

const PurchaseStack = createStackNavigator();

const SettingsStack = createStackNavigator();

const HomeStack: React.FunctionComponent<Props> = (props: Props) => (
  <CategoryStack.Navigator
    screenOptions={{
      headerStyle: props.styles.headerBackground,
      headerTintColor: props.styles.headerTextColor,
    }}>
    <CategoryStack.Screen
      name="Home"
      options={{
        title: 'Smart Pocket'
      }} component={Home} />
  </CategoryStack.Navigator>
);

const CatStack: React.FunctionComponent<Props> = (props: Props) => (
  <CategoryStack.Navigator
    screenOptions={{
      headerStyle: props.styles.headerBackground,
      headerTintColor: props.styles.headerTextColor,
    }}>
    <CategoryStack.Screen
      name="Categories"
      options={{
        title: 'Категории',
      }}
      component={Categories}
    />
    <CategoryStack.Screen
      name="CategoryDetails"
      component={CategoryDetails} />
  </CategoryStack.Navigator>
);

const PurStack: React.FunctionComponent<Props> = (props: Props) => (
  <PurchaseStack.Navigator
    screenOptions={{
      headerStyle: props.styles.headerBackground,
      headerTintColor: props.styles.headerTextColor,
    }}>
    <PurchaseStack.Screen
      name="Purchases"
      options={{
        title: 'Покупки',
      }}
      component={Purchases}
    />
    <PurchaseStack.Screen
      name="PurchaseDetails"
      component={PurchaseDetails} />
  </PurchaseStack.Navigator>
);

const SetStack: React.FunctionComponent<Props> = (props: Props) => (
  <SettingsStack.Navigator
    screenOptions={{
      headerStyle: props.styles.headerBackground,
      headerTintColor: props.styles.headerTextColor
    }}>
    <SettingsStack.Screen
      name="Settings"
      options={{
        title: 'Settings',
      }}
      component={MainSettings}
    />
  </SettingsStack.Navigator>
);

const CustomDrawerContent = (drawerProps: DrawerContentComponentProps<DrawerContentOptions> & Props) => {
  const isDarkTheme = drawerProps.theme === Theme.Dark;
  return (<DrawerContentScrollView {...drawerProps}>
    <DrawerItemList {...drawerProps} />
    <TouchableOpacity
      onPress={() => {
        drawerProps.changeTheme(isDarkTheme ? Theme.Light : Theme.Dark)
      }}
      activeOpacity={1}
      style={{ margin: 10 }}>
      <View
        style={{
          flexDirection: 'row',
          margin: 8,
          justifyContent: 'space-between'
        }}
        pointerEvents='none'>
        <Label>
          Night mode
        </Label>
        <Switch
          onValueChange={() => { }}
          value={isDarkTheme} />
      </View>
    </TouchableOpacity>
  </DrawerContentScrollView>);
}

const App: React.FunctionComponent<Props> = (props: Props) => (
  <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <DrawerNavigator.Navigator
        drawerContent={(drawerProps) => <CustomDrawerContent {...{ ...drawerProps, ...props }} />}
        drawerStyle={[props.styles.headerBackground]}
        drawerContentOptions={{
          labelStyle: {color: props.styles.headerTextColor},
          activeTintColor: props.styles.headerTextColor
        }}>
        <DrawerNavigator.Screen
          name={'Home'}
          component={connector(HomeStack)}
          options={{}}
        />
        <DrawerNavigator.Screen
          name={'Categories'}
          component={connector(CatStack)} />
        <DrawerNavigator.Screen
          name={'Purchases'}
          component={connector(PurStack)} />
        <DrawerNavigator.Screen
          name={'Settings'}
          component={connector(SetStack)} />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  </PersistGate>
);

export default connector(App);
