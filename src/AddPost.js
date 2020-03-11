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
import ListPosts from "./ListPosts";
class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: "",
      Title: "",
      Body: "",
      Author: ""
    };
  }

  Addstudent = () => {
    fetch("http://technicalhspt.org/test/insert.php", {
      method: "POST",
      body: JSON.stringify({
        id: this.state.Id,
        title: this.state.Title,
        body: this.state.Body,
        author: this.state.Author
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <Container className="App">
          <h4 className="PageHeading">Add Posts</h4>
          <Form className="form">
            <Col>
              <FormGroup row>
                <Label for="name" sm={2}>
                  Id
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="Id"
                    onChange={this.handleChange}
                    value={this.state.Id}
                    placeholder="Enter Id"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup row>
                <Label for="name" sm={2}>
                  Title
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="Title"
                    onChange={this.handleChange}
                    value={this.state.Title}
                    placeholder="Enter Title"
                  />
                </Col>
              </FormGroup>
            </Col>

            <Col>
              <FormGroup row>
                <Label for="name" sm={2}>
                  Body
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="Body"
                    onChange={this.handleChange}
                    value={this.state.Body}
                    placeholder="Enter Body"
                  />
                </Col>
              </FormGroup>
            </Col>

            <Col>
              <FormGroup row>
                <Label for="name" sm={2}>
                  Author
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="Author"
                    onChange={this.handleChange}
                    value={this.state.Author}
                    placeholder="Enter Author"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup row>
                <Col sm={5} />
                <Col sm={1}>
                  <button
                    type="button"
                    onClick={this.Addstudent}
                    className="btn btn-success"
                  >
                    Submit
                  </button>
                </Col>

                <Col sm={1} />
                <Col sm={1}>
                  <Button color="danger">Cancel</Button>{" "}
                </Col>
                <Col sm={4} />
              </FormGroup>
            </Col>
          </Form>
        </Container>
        <ListPosts />
      </div>
    );
  }
}

export default AddPost;
