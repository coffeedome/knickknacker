"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function AppBar({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar expand="lg" className="bg-secondary" sticky="top">
        <Navbar.Brand className="ms-5 text-white">
          <Link href="/" className="btn text-white fs-1">
            Knickknacker
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/profile" className="btn btn-outline-light me-2">
              My Profile
            </Link>
            <Link href="/profile" className="btn btn-outline-light me-2">
              Search
            </Link>
            <Link href="/signin" className="btn btn-outline-light me-5">
              Sign In
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {children}
    </div>
  );
}
