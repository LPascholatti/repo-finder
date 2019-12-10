import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function SearchBarForm(props) {
  const { onSubmit, onChange, values } = props;
  console.log("onchange values.name", values.name);

  return (
    <div className="search-bar">
      <Form inline onSubmit={onSubmit}>
        <Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search Repositories"
              aria-label="Search Repositories"
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
