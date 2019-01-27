import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { compose } from "redux";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
class Notes extends React.Component {
  _renderItem = ({ item: note }) => {
    return (
      <Card key={note.id}>
        <Card.Content>
          <Title>{note.title}</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button>Start</Button>
        </Card.Actions>
      </Card>
    );
  };
  _renderSeparator = () => {
    return <View style={[styles.ItemDivider]} />;
  };
  render() {
    const { notes } = this.props;
    return (
      <React.Fragment>
        <FlatList
          data={notes}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this._renderSeparator}
        />
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  ItemDivider: {
    height: 10
  }
});
export const QUERY_NOTES = gql`
  {
    notes {
      id
      title
      owner {
        id
        email
      }
    }
  }
`;
export default compose(
  graphql(QUERY_NOTES, {
    props: ({ data: { notes } }) => ({ notes: notes })
  })
)(Notes);
