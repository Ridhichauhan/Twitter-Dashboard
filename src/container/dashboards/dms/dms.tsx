import { Fragment, useState } from "react";
import { Card, Col, InputGroup, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import {TweetsData1 } from "../tweets/crmdata";

const Jobs = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setStartDate(date);
    }
  };

  return (
    <Fragment>
       <Row>
        <Col>
          <Card.Header className="d-flex align-items-center justify-content-between flex-wrap gap-3  p-3"></Card.Header>
        </Col>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Body className="">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <div className="d-flex flex-wrap gap-1">
                  <h1 className="fs-6 fw-bold">DMS</h1>
                </div>
                <div className="d-flex flex-column flex-sm-row">
                  <div className="form-group">
                    From Date
                    <InputGroup className="">
                      <InputGroup.Text className="input-group-text text-muted">
                        {" "}
                        <i className="ri-calendar-line"></i>
                      </InputGroup.Text>
                      <DatePicker
                        selected={startDate}
                        onChange={handleDateChange}
                      />
                    </InputGroup>
                  </div>
                  <div className="form-group ms-2">
                    To Date
                    <InputGroup className="">
                      <InputGroup.Text className="input-group-text text-muted">
                        {" "}
                        <i className="ri-calendar-line"></i>
                      </InputGroup.Text>
                      <DatePicker
                        selected={startDate}
                        onChange={handleDateChange}
                      />
                    </InputGroup>
                  </div>
                  <button
                    className="btn btn-sm text-nowrap  bgColor text-white ms-2 mt-4 mb-2"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Row>
            {TweetsData1.map((item: any, index: number) => (
              <Col xxl={3} key={index}>
                <Card className="custom-card">
                  <Card.Header className="align-items-center">
                    <div className="me-2"></div>
                    <div className="flex-fill">
                      <h1 className="fw-semibold fs-14 d-block text-truncate">
                        {item.heading}
                      </h1>
                    </div>
                    <div>
                      <i className={`${item.icon} fw-bold fs-4`}></i>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <p className="fw-semibold mb-1 fs-16">{item.number}</p>
                    <p className="text-muted mb-3">{item.body}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Jobs;
