import React, { useState, useEffect } from "react";
import axios from "axios";

import { Card, Container, Row, Col } from "react-bootstrap";

export default function CovidList() {
  const [covidList, setCovidList] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/covidList/`)
      .then((response) => setCovidList(response.data));
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:8080/api/covidList/`);
      setCovidList(data);
    };
    fetchData();
  }, []);

  const displayedNames = new Set();
  return (
    <div>
      <h1>List of Covid Cases</h1>
      <Container>
        <Row>
          {covidList && covidList.length > 1
            ? covidList.map((covidList) => {
                if (!displayedNames.has(covidList.district)) {
                  displayedNames.add(covidList.district);
                  return (
                    <Col md={3} key={covidList.district}>
                      <Card style={{ width: "18rem" }}>
                        <Card.Body>
                          <Card.Title>
                            {covidList
                              ? covidList.district
                              : "no card district "}
                          </Card.Title>
                          <Card.Text>
                            {covidList ? covidList.address : "no address"}
                          </Card.Text>
                          <Card.Text>
                            {covidList ? covidList.case : "no case"}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                }
                return null;
              })
            : "no products"}
        </Row>
      </Container>
    </div>
  );
}
