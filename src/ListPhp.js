import React, { Component } from "react";
import { Link } from "react-router-dom";
class ListPhp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: "",
      Title: "",
      Body: "",
      Author: "",
      listItems: []
    };
  }

  componentDidMount() {
    return fetch("http://technicalhspt.org/test/read.php")
      .then(response => response.json())
      .then(data => this.setState({ listItems: data }))
      .then(data => console.log(data))
      .catch(error => {
        //console.error(error);
      });
  }
  render() {
    const result = Object.keys(this.state.listItems).map(
      key => this.state.listItems[key]
    );
    return (
      <table className="table table-dark" style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Body</td>
            <td>Author</td>
          </tr>
        </thead>
        <tbody>
          {result.map(resultData => (
            <tr key={resultData.id}>
              <td>{resultData.id}</td>
              <td>{resultData.title}</td>
              <td>{resultData.body}</td>
              <td>{resultData.author}</td>
              <td>
                <Link
                  to={"/EditPhp/" + resultData.id}
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

export default ListPhp;
