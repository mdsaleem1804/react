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
      userId: ""
    };
  }

  Addstudent = () => {
    fetch("https://test-react-5b3fc.firebaseio.com/product.json", {
      method: "POST",
      body: JSON.stringify({
        id: this.state.Id,
        title: this.state.Title,
        body: this.state.Body,
        userId: this.state.UserId
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
                    value={this.state.Id}
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
                    value={this.state.Title}
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
                    value={this.state.Body}
                  />
                </Col>
                <Label for="name" sm={2}>
                  UserId
                </Label>
                <Col sm={4}>
                  <Input
                    type="text"
                    name="UserId"
                    onChange={this.handleChange}
                    value={this.state.UserId}
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
                    onClick={this.Addstudent}
                    className="btn btn-success"
                  >
                    Submit
                  </button>
                </Col>

                <Col sm={1} />
                <Col sm={1}>
                  <Button color="danger">Cancel</Button>
                </Col>
              </FormGroup>
            </Col>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AddPost;
