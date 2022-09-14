import React, { useState } from "react";
import { Navbar, Nav, Form, Button, Stack } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import InputGroup from "react-bootstrap/InputGroup";
import "../App.css";
const NavbarComponet = () => {
  const [showLogin, setShowLogin] = useState(false);
  const handleShowLogin = () => setShowLogin(true);
  return (
    <Navbar className="navbar-main">
      <Nav className="nav">
        <div className="nav-bar-main">
          <div>
            <div className="logo-btn">
              <Button variant="Outlined" onClick={handleShowLogin}>
                <div className="btn-footer-text">Logo</div>
              </Button>
              <Modal
                show={showLogin}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <div>
                    <h3 className="text-dark text-start fw-bold m-0">
                      Login as
                    </h3>
                    <form>
                      <div className="text-start mt-3">
                        <label className="text-dark" htmlFor="email">
                          Email Address
                        </label>
                        <br />
                        <input
                          className="text-dark w-100 login-input_box"
                          placeholder="Enter Your Email Address"
                          type="email"
                          name="email"
                          id="email"
                        />
                        <br />
                        <label className="text-dark" htmlFor="password">
                          Password
                        </label>
                        <br />
                        <input
                          className="text-dark w-100 login-input_box"
                          type="password"
                          name="password"
                          placeholder="***********"
                          id="password"
                        />
                        <br />
                      </div>
                      <button
                        className="d-block"
                        style={{
                          border: "5px",
                          background: "none",
                          marginLeft: "70%",
                          padding: "0px",
                        }}
                      >
                        <p className="m-0 mb-3 mt-2 fw-bold text-dark text-end">
                          Forgot Password?
                        </p>
                      </button>
                      {/* modal with forgot password */}

                      <button type="submit" className="w-100 btn btn-dark px-3">
                        Sing In
                      </button>
                      <p class="hr-sect text-dark my-3">OR</p>
                    </form>
                    <Stack
                      direction="horizontal"
                      gap={2}
                      style={{ marginLeft: "100px" }}
                    >
                      <p className="fw-bold text-secondary">
                        New User Account ?{" "}
                      </p>
                      <Nav.Link
                        className="text-danger underline "
                        to="/singUp"
                        style={{
                          marginBottom: "15px",
                          textDecoration: "underline",
                        }}
                      >
                        Sing Up
                      </Nav.Link>
                    </Stack>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
          <div>
            <InputGroup
              className="mb-2"
              style={{ width: "538px", marginTop: "10px" }}
            >
              <Form.Control
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <InputGroup.Text
                id="basic-addon1"
                style={{ backgroundColor: "white" }}
              >
                <i class="bi bi-search"></i>
              </InputGroup.Text>
            </InputGroup>
          </div>
          <Nav className="navbar-post-project" style={{whiteSpace:'nowrap'}}>
            <b>Post Project</b>
          </Nav>
          <Nav className="navbar-search-project" style={{whiteSpace:'nowrap'}}>
            <b>Search Project</b>
          </Nav>
          <Nav.Link href="#Chat">
            <i
              class="bi bi-chat-left "
              style={{
                fontSize: "25px",
                position: "relative",
                color: "#07A189",
              }}
            ></i>
            <sup>
              <span class="position-relative top-0 end-10 translate-middle badge rounded-pill bg-danger">
                9
              </span>
            </sup>
          </Nav.Link>
          <Nav.Link href="#favorite" className="icon-size-navbar">
            <i
              class="bi bi-heart "
              style={{
                fontSize: "25px",
                position: "relative",
                color: "#07A189",
              }}
            ></i>
            <sup>
              <span class="position-relative top-0 end-10 translate-middle badge rounded-pill bg-danger">
                9
              </span>
            </sup>
          </Nav.Link>
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={
              <Popover id={`popover-positioned-bottom`}>
                <Popover.Body>
                  <Stack gap={2}>
                    <Stack direction="horizontal" gap={3}>
                      <i
                        class="bi bi-person-fill"
                        style={{ fontSize: "25px", color: "#07A189" }}
                      ></i>
                      <div className="popover-navbar">View Profile</div>
                    </Stack>
                    <Stack direction="horizontal" gap={3}>
                      <i
                        class="bi bi-box-arrow-left"
                        style={{ fontSize: "25px", color: "#07A189" }}
                      ></i>
                      <div className="popover-navbar">Logout</div>
                    </Stack>
                  </Stack>
                </Popover.Body>
              </Popover>
            }
          >
            <div className="right-navbar-image"> </div>
          </OverlayTrigger>
          <i class="bi bi-chevron-down" style={{ color: "#07A189" }}></i>
        </div>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponet;
