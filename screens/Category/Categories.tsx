import React, { useEffect, useState } from 'react';
import { ScrollView, View, TouchableOpacity, Modal, TouchableHighlightBase, TextInput, Keyboard, Alert } from 'react-native';
import { RootState, Category } from '../../store/types';
import { addCategory, removeCategories } from '../../store/actions/categories';
import { connect, ConnectedProps } from 'react-redux';
import { selectAllCategories } from '../../store/selectors';
import { Screen, Label } from '../../components/ConnectedComponents';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CheckBox } from 'react-native-elements'
import AnimatedButton from '../../components/AnimatedButton';
import Animated, { Easing } from 'react-native-reanimated';

const mapStateToProps = (state: RootState) => ({
  categories: selectAllCategories(state.categoriesReducer),
  styles: state.settingsReducer.styles
})

const mapDispatchToProps = {
  addCategory,
  removeCategories
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)

type Props = ConnectedProps<typeof connector>

type State = {
  isCategoryAdding: boolean;
}

class Categories extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isCategoryAdding: false
    }
  }

  componentDidMount() {
    Keyboard.addListener("keyboardDidHide", this._keyboardDidHide);
  }

  componentWillUnmount() {
    Keyboard.removeListener("keyboardDidHide", this._keyboardDidHide);
  }

  _keyboardDidHide = () => {
    this.setState({ isCategoryAdding: false });
  }

  handlePress = (category: Category) => {
    this.props.navigation.navigate('CategoryDetails', { category })
  }

  renderCategoryPanel = (category: Category) => {
    return (
      <View key={category.id} style={{ flexDirection: 'row', marginTop: 10, marginRight: 10, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => { this.handlePress(category) }}
          activeOpacity={.7}
          style={[{ padding: 5, borderRadius: 5, flex: 1 }, this.props.styles.headerBackground]}>
          <Label style={{ fontSize: 18 }}>{category.name}</Label>
        </TouchableOpacity>
      </View>
    )
  }

  handleAddCategory = (name: string) => {
    if (this.props.categories.some((cat) => cat.name === name))
      Alert.alert('', 'Такая категория уже существует');
    else if (!!name.trim())
      this.props.addCategory(name);
    this.setState({ isCategoryAdding: false })
  }

  render() {
    return (
      <Screen>
        <ScrollView>
          {this.props.categories.map((c => this.renderCategoryPanel(c)))}
        </ScrollView>
        {!this.state.isCategoryAdding &&
          <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
            <TouchableOpacity
              style={{ backgroundColor: this.props.styles.headerBackgroundColor, width: 20, height: 20, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
              activeOpacity={.7} onPress={() => { this.setState({ isCategoryAdding: true }) }}>
              <Label>+</Label>
            </TouchableOpacity>
          </View>
        }
        {this.state.isCategoryAdding && <View>
          <TextInput autoFocus onEndEditing={() => { this.setState({ isCategoryAdding: false }) }} onSubmitEditing={(e) => { this.handleAddCategory(e.nativeEvent.text) }} />
        </View>}
      </Screen>
    );
  }
};
export default connector(Categories)
