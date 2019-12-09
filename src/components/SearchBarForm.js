import React from "react";
// import Login from "./Login";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function SearchBarForm(props) {
  const { onSubmit, onChange, values } = props;
  console.log("onchange", values.name);

  return (
    <div className="search-bar">
      <Form inline onSubmit={onSubmit}>
        <Form.Label>
          <InputGroup
            className="mb-3"
            size="sm"
            type="text"
            name="name"
            onChange={onChange}
            onSubmit={onSubmit}
            value={values.name}
          >
            <FormControl
              placeholder="Search Repositories by Name"
              aria-label="Search Repositories by Name"
              aria-describedby="basic-addon2"
              type="text"
              name="name"
              onChange={onChange}
              onSubmit={onSubmit}
              value={values.name}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" type="submit">
                Submit
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Label>
      </Form>
    </div>
  );
}
