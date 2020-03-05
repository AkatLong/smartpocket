import React, {isValidElement} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {RootState, CategoriesActionTypes} from '../../store/types';
import {addCategory} from '../../store/actions/categories';
import {useDispatch, connect, ConnectedProps} from 'react-redux';
import {store} from '../../store/store';
import {selectAllCategories, selectAllPurchases} from '../../store/selectors';
import {addPurchase} from '../../store/actions/purchases';

const mapStateToProps = (state: RootState) => ({
  purchases: selectAllPurchases(state.purchasesReducer),
  categories: selectAllCategories(state.categoriesReducer)
});

const mapDispatchToProps = {
  addPurchase: addPurchase,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const Purchases: React.FunctionComponent<Props> = props => {
  return (
    <ScrollView>
      {props.purchases.map(p => (
        <Text
          key={p.id}
          onPress={() => {
            props.navigation.navigate('PurchaseDetails', {purchase: p});
          }}>
          {p.id}
        </Text>
      ))}
      <Text onPress={()=>{props.addPurchase(Math.random()*25,props.categories[0].id)}}>Purchases</Text>
    </ScrollView>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Purchases);
