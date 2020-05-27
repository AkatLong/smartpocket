import React from 'react';
import { ScrollView} from 'react-native';
import {RootState} from '../../store/types';
import {connect, ConnectedProps} from 'react-redux';
import {selectAllCategories, selectAllPurchases} from '../../store/selectors';
import {addPurchase} from '../../store/actions/purchases';
import { Screen, Label } from '../../components/ConnectedComponents';

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
    <Screen>
    <ScrollView>
      {props.purchases.map(p => (
        <Label
          key={p.id}
          onPress={() => {
            props.navigation.navigate('PurchaseDetails', {purchase: p});
          }}>
          {p.id}
        </Label>
      ))}
      <Label onPress={()=>{props.addPurchase(Math.random()*25,props.categories[0].id)}}>Purchases</Label>
    </ScrollView>
    </Screen>
  );
};

export default connector(Purchases);
