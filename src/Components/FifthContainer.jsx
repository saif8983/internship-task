import React from "react";
import { Button, Stack } from "react-bootstrap";

const FifthContainer = () => {
  return (
    <Stack direction="horizontal" gap={1} style={{ padding: "50px" }}>
      <Stack gap={3}>
        <div className="logo-footer-btn">
          <Button variant="Outlined">
            <div className="btn-footer-text">Logo</div>
          </Button>
        </div>
        <div className="footer-content">
          1901 Thornridge Cir.<br></br> Shiloh, Hawaii<br></br> 81063
        </div>
      </Stack>
      <Stack gap={3}>
        <div className="footer-title">Company</div>
        <div className="btn-footer">About Us</div>
        <div className="btn-footer">Career</div>
        <div className="btn-footer">Team</div>
        <div className="btn-footer">Contact</div>
      </Stack>
      <Stack gap={3}>
        <div className="footer-title">Product</div>
        <div className="btn-footer">Service</div>
        <div className="btn-footer">Freelancer</div>
        <div className="btn-footer">Features</div>
        <div className="btn-footer">Development</div>
      </Stack>
      <Stack gap={3}>
        <div className="footer-title">Links</div>
        <div className="btn-footer">Privacy Policy</div>
        <div className="btn-footer">Term & Condition</div>
        <div className="btn-footer">FAQ</div>
      </Stack>
      <Stack gap={3}>
        <div className="footer-title">Follow Us</div>
        <Stack direction="horizontal" gap={3}>
          <i class="bi bi-twitter" style={{ fontSize: "2em" }}></i>
          <i class="bi bi-facebook" style={{ fontSize: "2em" }}></i>
          <i class="bi bi-instagram" style={{ fontSize: "2em" }}></i>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FifthContainer;
