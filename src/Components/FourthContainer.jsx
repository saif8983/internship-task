import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { phonesImages } from "../Utils/CardData";
const FourthContainer = () => {
  return (
    <div>
      <Row style={{ marginTop: "5rem" ,boxSizing:'border-box'}}>
        <Col style={{marginLeft:'35rem'}} >
          <div className="text-fourth-container">valite officia consequate</div>
        </Col>
      </Row>
      <Row class="mt-3">
        <Col style={{marginLeft:'32rem'}} >
          <div className="title-fourth-container">Lorem ipsum sit amet</div>
        </Col>
      </Row>
      <Row class="mt-3">
        <Col  style={{marginLeft:'66rem'}}>
          <div style={{ display: "flex" }}>
            <div className="seemore-fourth-container">See More <i
              class="bi bi-arrow-right"
              style={{ fontSize: "100%", color: "white" }}
            ></i></div>
            
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3 fourth-container-image">
        {phonesImages.map((data) => (
          <>
            <Col sm={2}>
              <Card
                style={{ width: "12em", height: "25em" }}
              >
                <Card.Img
                  variant="top"
                  style={{ height: "60%" }}
                  src={data.Card_Img}
                />
                <Card.ImgOverlay>
                  <i
                    class="bi bi-heart "
                    style={{
                      fontSize: "100%",
                      marginLeft: "90%",
                      color: "white",
                    }}
                  ></i>
                </Card.ImgOverlay>
                <Card.Body>
                  <div style={{ display: "flex" }}>
                    <div className="card-profile-img"> </div>
                    <div>
                      <Card.Title
                        className="card-title"
                        style={{ marginLeft: "0.2em" }}
                      >
                        {data.Card_Title}
                      </Card.Title>
                      <Card.Text className="card-text-profile">
                        View Profile
                      </Card.Text>
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Card.Title className="card-title-rating">
                      {data.Card_Rating}
                    </Card.Title>
                    <div style={{ marginLeft: "10px" }}>
                      <i class="bi bi-star-fill" id="start-card"></i>
                      <i class="bi bi-star-fill" id="start-card"></i>
                      <i class="bi bi-star-fill" id="start-card"></i>
                      <i class="bi bi-star-fill" id="start-card"></i>
                      <i class="bi bi-star-half" id="start-card"></i>
                    </div>
                  </div>
                  <Card.Text className="card-text-description">
                    Amet minim mollit non deserunt ullamco est sit.
                  </Card.Text>
                  <hr></hr>
                  <div className="card-price-section">
                    <div>
                      <Card.Text className="card-text-rate">
                        <i class="bi bi-currency-rupee"></i>
                        {data.Card_Price}{" "}
                      </Card.Text>
                      <Card.Text className="card-text-price">
                        {" "}
                        Starting Price
                      </Card.Text>
                    </div>
                    <Button variant="dark">Select</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
};

export default FourthContainer;
