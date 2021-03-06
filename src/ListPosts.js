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
    return fetch("https://test-react-5b3fc.firebaseio.com/product.json")
      .then(response => response.json())
      .then(data => this.setState({ listItems: data, isLoading: false }))
      .catch(error => {
        //console.error(error);
      });
  }
  render() {
    const result = Object.keys(this.state.listItems).map(
      key => this.state.listItems[key]
    );
    //const result = result1.filter(el => el.id === 1);
    //console.log(result);
    return (
      <table className="table table-dark" style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Body</td>
            <td>userId</td>
          </tr>
        </thead>
        <tbody>
          {result.map(resultData => (
            <tr key={resultData.id}>
              <td>{resultData.id}</td>
              <td>{resultData.title}</td>
              <td>{resultData.body}</td>
              <td>{resultData.userId}</td>

              <td>
                <Link
                  to={"/EditPost/" + resultData.userId}
                  className="btn btn-success"
                >
                  Edit
                </Link>
              </td>
              <td>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ListPosts;
