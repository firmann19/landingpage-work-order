import React from "react";
import { Card, Form } from "react-bootstrap";
import SButton from "../components/partikel/Button";

function Approval() {
  return (
    <div className="container-approval">
      <div className="approval">
        <Card className="bg-secondary" style={{ width: "30rem", height: "20rem"}}>
          <Card.Body>
            <Card.Title className="fw-bold text-xl color-palette-1 text-white text-center mb-5">Approval Work Order</Card.Title>
            <Form.Label htmlFor="inputPassword5" className="text-white">Masukan kode Approval</Form.Label>
            <Form.Control
              type="text"
              id="textapproval"
            />
            <SButton className="w-full bg-danger font-Quicksand text-white border-2 mt-4 rounded py-2 px-4 md:h-16 md:text-xl md:mt-4 lg:text-base lg:h-10">Approval</SButton>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Approval;