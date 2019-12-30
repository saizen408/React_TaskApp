import Link from "next/link";
import React, { Component } from "react";
import Form from "../components/Form";

class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          Hello World.{" "}
          <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
            <a>About</a>
          </Link>
        </div>
        <Form />
      </div>
    );
  }
}

export default Index;
