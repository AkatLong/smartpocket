import React from 'react';
import {View, Text, Button} from 'react-native';
import {selectAllPurchases} from '../../store/selectors';
import {RootState, Purchase} from '../../store/types';
import {connect, ConnectedProps} from 'react-redux';
import {removePurchase, editPurchase} from '../../store/actions/purchases';

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
    <View>
      <Text>{purchase.id}</Text>
      <Text>{purchase.sum}</Text>
      <Text>{purchase.timestamp}</Text>
      <Button
        title="Удалить"
        onPress={() => {
          props.removePurchase(purchase.id);
          props.navigation.navigate('Purchases');
        }}
      />
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseDetails);
