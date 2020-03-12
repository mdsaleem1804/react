import React, { Component } from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
class EditPhp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: "",
      Title: "",
      Body: "",
      Author: "",
      listItems: [],
      selectedId: this.props.match.params.id,
      filteredData: []
    };
  }

  componentDidMount() {
    return fetch("http://technicalhspt.org/test/read.php")
      .then(response => response.json())
      .then(data => this.setState({ listItems: data }))
      .then(data => this.fetchSelectedData())
      .catch(error => {
        console.error(error);
      });
  }
  myFunction = param => {
    console.log("do something: ", param);
  };
  UpdatePHP = seletectedDetail => {
    fetch("http://technicalhspt.org/test/update.php", {
      method: "PUT",
      body: JSON.stringify({
        id: seletectedDetail.id,
        title: seletectedDetail.title,
        body: seletectedDetail.body,
        author: seletectedDetail.author
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };
  DeletePHP = seletectedDetail => {
    fetch("http://technicalhspt.org/test/delete.php", {
      method: "DELETE",
      body: JSON.stringify({
        id: seletectedDetail.id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };
  fetchSelectedData() {
    const result = Object.keys(this.state.listItems).map(
      key => this.state.listItems[key]
    );

    const selectedId = this.state.selectedId;

    var selectedfilteredData = result
      .filter(function(item) {
        return item.id == selectedId;
      })
      .map(function({ id, title, body, author }) {
        return { id, title, body, author };
      });
    //console.log("check");
    //console.log(selectedId);
    this.setState({ filteredData: selectedfilteredData });
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <div>
          {this.state.filteredData.map((singlePerson, index) => (
            <Container key={singlePerson.id}>
              <h4 className="PageHeading">Edit Posts</h4>
              <hr size="30" />
              <Form className="form">
                <Col>
                  <FormGroup row>
                    <Label for="name" sm={2}>
                      Id
                    </Label>
                    <Col sm={4}>
                      <Input
                        type="text"
                        name="Id"
                        onChange={this.handleChange}
                        value={singlePerson.id}
                      />
                    </Col>
                    <Label for="name" sm={2}>
                      Title
                    </Label>
                    <Col sm={4}>
                      <Input
                        type="text"
                        name="Title"
                        onChange={this.handleChange}
                        value={singlePerson.title}
                      />
                    </Col>
                  </FormGroup>
                </Col>

                <Col>
                  <FormGroup row>
                    <Label for="name" sm={2}>
                      Body
                    </Label>
                    <Col sm={4}>
                      <Input
                        type="text"
                        name="Body"
                        onChange={this.handleChange}
                        value={singlePerson.body}
                      />
                    </Col>
                    <Label for="name" sm={2}>
                      Author
                    </Label>
                    <Col sm={4}>
                      <Input
                        type="text"
                        name="Author"
                        onChange={this.handleChange}
                        value={singlePerson.author}
                      />
                    </Col>
                  </FormGroup>
                </Col>

                <Col>
                  <FormGroup row>
                    <Col sm={9} />
                    <Col sm={1}>
                      <button
                        type="button"
                        onClick={this.UpdatePHP(singlePerson)}
                        className="btn btn-success"
                      >
                        Update
                      </button>
                    </Col>

                    <Col sm={1} />
                    <Col sm={1}>
                      <button
                        type="button"
                        onClick={this.DeletePHP(singlePerson)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </Col>
                  </FormGroup>
                </Col>
              </Form>
            </Container>
          ))}
        </div>
      </div>
    );
  }
}

export default EditPhp;
