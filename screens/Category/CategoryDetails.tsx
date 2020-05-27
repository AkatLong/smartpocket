import React from 'react';
import {View, Button} from 'react-native';
import {selectCategtoryById, selectAllCategories} from '../../store/selectors';
import {RootState} from '../../store/types';
import {connect, ConnectedProps} from 'react-redux';
import { removeCategory, editCategory } from '../../store/actions/categories';
import { Screen, Label } from '../../components/ConnectedComponents';

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
    <Screen>
      <Label>{category.id}</Label>
      <Label>{category.name}</Label>
      <Label>{category.timestamp}</Label>
      <Button title='Удалить' onPress={()=>{props.removeCategory(category.id);props.navigation.navigate('Categories')}}/>
    </Screen>
  );
};

export default connector(CategoryDetails);
