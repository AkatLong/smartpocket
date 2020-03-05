import React, { isValidElement } from 'react';
import {View, Text, ScrollView} from 'react-native';
import { RootState, CategoriesActionTypes } from '../../store/types';
import { addCategory } from '../../store/actions/categories';
import { useDispatch, connect, ConnectedProps } from 'react-redux';
import { store } from '../../store/store';
import { selectAllCategories } from '../../store/selectors';

const mapStateToProps = (state: RootState)=>({
  categories:selectAllCategories(state.categoriesReducer)
})

const mapDispatchToProps = {
  addCategory:addCategory
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)

type Props = ConnectedProps<typeof connector>

const Categories: React.FunctionComponent<Props> = (props) => {
  return (
    <ScrollView>
      {props.categories.map((c=>(<Text key={c.id} onPress={()=>{props.navigation.navigate('CategoryDetails',{category:c})}}>{c.id}</Text>)))}
      <Text onPress={()=>{props.addCategory('test')}}>Categories</Text>
    </ScrollView>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(Categories)
