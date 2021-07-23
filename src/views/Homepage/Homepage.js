import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import FooterBlack from "../../components/Footers/FooterBlack.js";
import HomepageMain from "./HomepageMain";
import WhiteNavbar from "../../components/Navbars/WhiteNavbar";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <WhiteNavbar />
      <HomepageMain />
      <div className="wrapper">
        <div className="section text-center landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Why use Beanstalk?</h2>
                <h5>
                  Because it's not all "the same." It does matter how it's made. You can taste the difference. Foamed
                  milk is a gift from the gods. Your first ever was magical. And there's a romance to it that
                  will never go away.
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-zoom-split" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Discover</h4>
                    <p>
                      Use our search tool to find roasters with new
                      and exciting beans to try.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-book-bookmark" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Remember</h4>
                    <p>
                      Create an account to save your discoveries so you can
                      buy your beans fresh at a later date.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-chat-33" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Reflect</h4>
                    <p>
                      Share your feedback so you and like-minded bean-seekers can
                      discover good roasts in the future.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center landing-section">
          <Container>
            <h2 className="title">Let's talk about us</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  {/*<div className="card-avatar">*/}
                  {/*  <a href="#pablo" onClick={(e) => e.preventDefault()}>*/}
                  {/*    <img*/}
                  {/*      alt="..."*/}
                  {/*      src={*/}
                  {/*        require("assets/img/faces/clem-onojeghuo-3.jpg")*/}
                  {/*          .default*/}
                  {/*      }*/}
                  {/*    />*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Maxim Bleeker</CardTitle>
                        <h6 className="card-category text-muted">
                          Java(script) Addict
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Lots and lots of work on the Ruby on Rails backend. 5 models, authentications, sessions,
                      multiple nested relationships, all without putting down his coffee.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/james-maxim-vladimirovich/"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  {/*<div className="card-avatar">*/}
                  {/*  <a href="#pablo" onClick={(e) => e.preventDefault()}>*/}
                  {/*    <img*/}
                  {/*      alt="..."*/}
                  {/*      src={*/}
                  {/*        require("assets/img/faces/joe-gardner-2.jpg").default*/}
                  {/*      }*/}
                  {/*    />*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Cubby Alexander</CardTitle>
                        <h6 className="card-category text-muted">Two Stacks A Day</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Double shots of React for breakfast. Router setup, event handling, state management,
                      conditional rendering of asynchronous function data, and crema smooth UI.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/cubby-alexander-52800234/"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Vishakh Kumar</CardTitle>
                        <h6 className="card-category text-muted">Expresso.js</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Buzzing on full CRUD -- 16 oz of Axios, five times a day, late into the night.
                      Integrating API calls with a full suite of front-end functionality. The link between
                      front- and back-end.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="https://www.linkedin.com/in/vishakh-kumar/"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <Input placeholder="Name" />
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <Input placeholder="Email" />
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="offset-md-4" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FooterBlack />
    </>
  );
}

export default LandingPage;
