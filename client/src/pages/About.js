import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://pixel.nymag.com/imgs/daily/intelligencer/2014/04/11/11-bookstores-6-three-lives-2.w700.h467.2x.jpg">
        <h1>Google Book Store</h1>
        <h2>New Place for Hangout!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Google Book Store!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            The Google Bookstore is UO Bootcamp largest used and new book and record store. Currently in our third incarnation, 
            we began in 2019 in a downtown Portland loft.That’s when owner <i>Arunav Gupta </i>took his decade of experience selling 
            everything from cars to clothes online and focused instead on his first love: books. 
            During the revitalization of downtown Portland, we grew quickly to our current 22,000 sq. ft. space.
            The name was chosen with irony, but seems more appropriate with each passing day as physical bookstores die out like dinosaurs from the meteoric impact of Amazon and e-books. We continue to BUY, SELL, and TRADE like we have from day one.
           </p>

            <p>
            In addition to over 250,000 NEW and USED books on two floors, including our new Arts & Rare Book Annex, our shared space includes tens of thousands of VINYL RECORDS and GRAPHIC NOVELS, 
            a huge mezzanine level that includes the Labyrinth Above the Last Bookstore, Gather Yarn Shop, and the Spring Arts Collective gallery shops.
            Truly something for everyone. Somehow we became one of the largest independent bookstores in the world still standing.
            We continue to be amazed at how we got here. It’s ALL thanks to people like you who want to keep actual books and records existing in the world. 
            
            Join the cause — visit us soon!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
