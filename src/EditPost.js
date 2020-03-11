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
import axios from "axios";
class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: "",
      Title: "",
      Body: "",
      Author: "",
      Data: []
    };
  }

  componentDidMount() {
    //http://technicalhspt.org/test/read.php?id=4 fetch("http://technicalhspt.org/test?id=" + this.props.match.params.id)
    fetch("http://technicalhspt.org/test/read.php?id=4")
      .then(response => response.json())
      .then(
        json => console.log(json)
        //json => this.setState({ data: json })
      );
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const result = Object.keys(this.state.data).map(
      key => this.state.data[key]
    );
    this.setState({ Title: result.title });
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
                <Col sm={5} />
                <Col sm={1}>
                  <button
                    type="button"
                    onClick={this.Addstudent}
                    className="btn btn-success"
                  >
                    Update
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

export default EditPost;
