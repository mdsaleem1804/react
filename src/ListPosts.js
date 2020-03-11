import React, { Component } from "react";
import { Link } from "react-router-dom";
class ListPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: []
    };
  }

  componentDidMount() {
    return fetch("http://technicalhspt.org/test/read.php")
      .then(response => response.json())
      .then(data => this.setState({ listItems: data, isLoading: false }))
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    const result = Object.keys(this.state.listItems).map(
      key => this.state.listItems[key]
    );
    //const result = result1.filter(el => el.id === 1);
    //console.log(result);
    return (
      <table className="table table-striped" style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Body</td>
            <td>Author</td>
          </tr>
        </thead>
        {result.map(resultData => (
          <tr key={resultData.UserId}>
            <td>{resultData.id}</td>
            <td>{resultData.title}</td>
            <td>{resultData.body}</td>
            <td>{resultData.author}</td>
            <td>
              <Link
                to={"/EditPost/" + resultData.id}
                className="btn btn-success"
              >
                Edit
              </Link>
            </td>
            <td>
              <button
                type="button"
                onClick={this.DeleteStudent}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

export default ListPosts;
