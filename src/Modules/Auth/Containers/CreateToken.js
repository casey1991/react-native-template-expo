import React from "react";
import { StyleSheet } from "react-native";
import { AsyncStorage } from "react-native";
import { compose } from "redux";
import { TextInput, Button } from "react-native-paper";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { navigate, Constants } from "../../../Libs/NavigationService";
class CreateToken extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }
  _createToken = async () => {
    const { createToken } = this.props;
    const { email, password } = this.state;
    createToken({
      variables: { email, password },
      update: async (proxy, { data: { createToken } }) => {
        if (createToken && createToken.accessToken) {
          await AsyncStorage.setItem("token", createToken.accessToken);
          navigate(Constants.HOME_STACK);
        }
      }
    });
  };
  _submitEnable = () => {
    const { email, password } = this.state;
    if (email && password) {
      return true;
    }
    return false;
  };
  render() {
    return (
      <React.Fragment>
        <TextInput
          label="Email"
          onChangeText={text => {
            this.setState({ email: text });
          }}
        />
        <TextInput
          label="Password"
          onChangeText={text => {
            this.setState({ password: text });
          }}
        />
        <Button
          mode="contained"
          disabled={!this._submitEnable()}
          onPress={this._createToken}
        >
          Submit
        </Button>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  ItemDivider: {
    height: 10
  }
});
export const MUTATION_CREATE_TOKEN = gql`
  mutation createToken($email: Email!, $password: String!) {
    createToken(email: $email, password: $password) {
      accessToken
    }
  }
`;
export default compose(
  graphql(MUTATION_CREATE_TOKEN, {
    props: ({ mutate }) => ({
      createToken: mutate
    })
  })
)(CreateToken);
