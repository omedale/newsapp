import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { Link } from "react-router";

class NewsListItem extends React.Component {
  render() {
    const { source } = this.props;
    return (
      <ListGroupItem>
        <Link to={`/source/${source.id}`}>
          <h4>{source.name}</h4>
        </Link>
      </ListGroupItem>
    );
  }
}

export default NewsListItem;