import React from "react";
import { map } from "lodash";
import { compose } from "redux";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
class Notes extends React.Component {
  render() {
    const { notes } = this.props;
    return (
      <React.Fragment>
        {map(notes, note => (
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
        ))}
      </React.Fragment>
    );
  }
}
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
