import React from "react";
import "../App.css";
import { Card, Button } from "react-bootstrap";
import { threeCardData, fourCardData } from "../Utils/CardData";

const FirstContainer = () => {
  return (
    <>
      <div class=" flex-card-fistcontainer " >
        <div className="text-title-size">
          <div className="text-first-container">valite officia consequate</div>
          <div className="title-first-container">
            Lorem ipsum dolor,<br></br>
            amet consectetur<br></br>
            adipicing.
          </div>
        </div>

        {threeCardData.map((data) => (
          <Card style={{ width: "12em", height: "25em" }}>
            <Card.Img
            style={{height:'8rem',width:'100%'}}
              variant="top"
             
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
                    style={{ marginLeft: "2%",whiteSpace:'nowrap' }}
                  >
                    {data.Card_Title}
                  </Card.Title>
                  <Card.Text className="card-text-profile" style={{whiteSpace:'nowrap'}}>
                    View Profile
                  </Card.Text>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Card.Title className="card-title-rating">
                  {data.Card_Rating}
                </Card.Title>
                <div style={{ marginLeft: "10%" }}>
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
      <div class="flex-card-second-first-container  " >
        {fourCardData.map((data) => (
          <Card style={{ width: "12em", height: "25em" }}>
            <Card.Img
              variant="top"
              style={{height:'8rem',width:'100%'}}
              src="https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196__340.jpg"
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
                    style={{ marginLeft: "2%" ,whiteSpace:'nowrap'}}
                  >
                    {data.Card_Title}
                  </Card.Title>
                  <Card.Text className="card-text-profile" style={{whiteSpace:'nowrap'}}>
                    View Profile
                  </Card.Text>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Card.Title className="card-title-rating">
                  {data.Card_Rating}
                </Card.Title>
                <div style={{ marginLeft: "10%" }}>
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

      <div style={{ display: "flex", margin:"2% 90%" }}>
        <div className="see-more-card" style={{whiteSpace:'nowrap'}}>See More <i
          class="bi bi-arrow-right"
          style={{ fontSize: "100%", color: "white" }}
        ></i></div>
        
      </div>
    </>
  );
};

export default FirstContainer;
