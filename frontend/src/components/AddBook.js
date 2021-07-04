import { graphql } from 'react-apollo';
import { Component } from 'react';
import { getAuthorsQuery } from '../queries/queries';

class AddBook extends Component {
  displayAuthor() {
    var data = this.props.data;
    if (data.loading) {
      return <option disabled>Loading Authors...</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  render() {
    return (
      <form id="add-book">
        <div className="field">
          <label>Book Name : </label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Genre : </label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Author</label>
          <select>
            <option>Select author</option>
            {this.displayAuthor()}
          </select>
        </div>

        <button>Add</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
