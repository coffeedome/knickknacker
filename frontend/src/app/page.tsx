'use client';
import { ReactNode } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Navbar expand="lg" className="bg-secondary">
        <Navbar.Brand className="ms-5 text-white" href="/">Knickknacker</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-white" href="/">My Profile</Nav.Link>
            <Nav.Link className="text-white" href="/search">Search</Nav.Link>
            <Nav.Link className="text-white" href="/signin">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
