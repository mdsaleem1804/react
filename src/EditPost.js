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
class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: "",
      Title: "",
      Body: "",
      listItems: [],
      selectedId: this.props.match.params.id,
      filteredData: []
    };
  }

  componentDidMount() {
    return fetch("https://test-react-5b3fc.firebaseio.com/product.json")
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
  fetchSelectedData() {
    const result = Object.keys(this.state.listItems).map(
      key => this.state.listItems[key]
    );
    const selectedId = this.state.selectedId;
    console.log("check");
    console.log(selectedId);
    var selectedfilteredData = result
      .filter(function(item) {
        return item.userId == selectedId;
      })
      .map(function({ id, title, body, userId }) {
        return { id, title, body, userId };
      });
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
                      UserId
                    </Label>
                    <Col sm={4}>
                      <Input
                        type="text"
                        name="UserId"
                        onChange={this.handleChange}
                        value={singlePerson.userId}
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
          ))}
        </div>
        <ListPosts onClick={this.myFunction} />
      </div>
    );
  }
}

export default EditPost;
