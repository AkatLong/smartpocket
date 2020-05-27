import React from 'react';
import {Button} from 'react-native';
import {selectAllPurchases} from '../../store/selectors';
import {RootState} from '../../store/types';
import {connect, ConnectedProps} from 'react-redux';
import {removePurchase, editPurchase} from '../../store/actions/purchases';
import { Screen, Label } from '../../components/ConnectedComponents';

const mapStateToProps = (state: RootState) => ({
  purchases: selectAllPurchases(state.purchasesReducer),
});

const mapDispatchToProps = {
  removePurchase: removePurchase,
  editPurchase: editPurchase,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const PurchaseDetails: React.FunctionComponent<Props> = props => {
  const {purchase} = props.route.params;

  return (
    <Screen>
      <Label>{purchase.id}</Label>
      <Label>{purchase.sum}</Label>
      <Label>{purchase.timestamp}</Label>
      <Button
        title="Удалить"
        onPress={() => {
          props.removePurchase(purchase.id);
          props.navigation.navigate('Purchases');
        }}
      />
    </Screen>
  );
};

export default connector(PurchaseDetails);
