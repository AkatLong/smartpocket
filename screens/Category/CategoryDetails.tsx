import React from 'react';
import {View, Text, Button} from 'react-native';
import {selectCategtoryById, selectAllCategories} from '../../store/selectors';
import {RootState} from '../../store/types';
import {connect, ConnectedProps} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { removeCategory, editCategory } from '../../store/actions/categories';

const mapStateToProps = (state: RootState) => ({
  categories: selectAllCategories(state.categoriesReducer),
  selectCategtoryById,
});

const mapDispatchToProps = {
  removeCategory:removeCategory,
  editCategory:editCategory
}

const connector = connect(mapStateToProps,mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const CategoryDetails: React.FunctionComponent<Props> = props => {
  const {category} = props.route.params;

  return (
    <View>
      <Text>{category.id}</Text>
      <Text>{category.name}</Text>
      <Text>{category.timestamp}</Text>
      <Button title='Удалить' onPress={()=>{props.removeCategory(category.id);props.navigation.navigate('Categories')}}/>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetails);
