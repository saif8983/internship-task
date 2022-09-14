import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { fourCardData } from "../Utils/CardData";
const SecondContainer = () => {
  return (
    <>
      <div
        class="d-flex justify-content-between"
        style={{  margin: "5rem 5rem 0px 7rem" }}
      >
        <div className="text-title-container" style={{ marginRight: "15rem" }}>
          <div className="text-second-container">valite officia consequate</div>
          <div className="title-second-container">
            Lorem ipsum dolor sit amet
          </div>
        </div>
        <div>
          <div
            style={{ display: "flex", marginTop: "1rem" }}
          >
            <div className="second-seemore">See More <i class="bi bi-arrow-right" style={{ fontSize: "100%" }}></i></div>
            
          </div>
        </div>
      </div>
      <div
        class="d-flex justify-content-center"
        style={{ marginTop: "5rem",gap:"3rem"}}
      >
        {fourCardData.map((data) => (
          <Card
            style={{ width: "12em", height: "25em" }}
            id="second-container-card"
          >
            <Card.Img variant="top" src={data.Card_Img} style={{height:'8rem',width:'100%'}} />
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
                    style={{ marginLeft: "0.2em",whiteSpace:'nowrap' }}
                  >
                    {data.Card_Title}
                  </Card.Title>
                  <Card.Text className="card-text-profile" style={{whiteSpace:'nowrap'}}>
                    View Profile
                  </Card.Text>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Card.Title className="card-title-rating" style={{ marginLeft: "2%" ,whiteSpace:'nowrap'}}>
                  {data.Card_Rating}
                </Card.Title>
                <div style={{ marginLeft: "0.5em" }}>
                  <i class="bi bi-star-fill" id="start-card"></i>
                  <i class="bi bi-star-fill" id="start-card"></i>
                  <i class="bi bi-star-fill" id="start-card"></i>
                  <i class="bi bi-star-fill" id="start-card"></i>
                  <i class="bi bi-star-half" id="start-card"></i>
                </div>
              </div>
              <Card.Text className="card-text-description" style={{whiteSpace:'nowrap'}}>
                Amet minim mollit<br></br> non deserunt<br></br> ullamco est sit.
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
        ))}
      </div>
    </>
  );
};

export default SecondContainer;
