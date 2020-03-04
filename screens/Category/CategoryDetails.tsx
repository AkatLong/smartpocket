import React from 'react';
import {View, Text} from 'react-native';
import {selectCategtoryById, selectAllCategories} from '../../store/selectors';
import {RootState} from '../../store/types';
import {connect, ConnectedProps} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const mapStateToProps = (state: RootState) => ({
  categories: selectAllCategories(state.categoriesReducer),
  selectCategtoryById,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

const CategoryDetails: React.FunctionComponent<Props> = props => {
  const nav=useNavigation();
  console.log(nav)
  const {categoryId} = props.route.params;
  const category = props.selectCategtoryById(
    {categories: props.categories},
    categoryId,
  );
  return (
    <View>
      <Text>{category.id}</Text>
      <Text>{category.name}</Text>
      <Text>{category.timestamp}</Text>
    </View>
  );
};

export default connect(mapStateToProps, {})(CategoryDetails);
