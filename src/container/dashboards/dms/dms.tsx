import { Fragment, useEffect, useState } from "react";
import { Card, Col, InputGroup,Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import axios from "axios";
import Loader from "../../../components/common/loader/loader";

const Jobs = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [tweets, setTweets] = useState<any>([]);
  const [loader, setLoader] = useState(false);
  const authToken =
    "eyJhbGciOiJIUzI1NiJ9.NjQyZWE3OTlmNWFlZDRkYjljM2Y0ZGNk.awn0t67fZapAxQLIs9NmdPWHklkT4gL3uaVmCZuTpX4";
  useEffect(() => {
    fetchData();
  }, []);
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setStartDate(date);
    }
  };
  const handleDateChange1 = (date: Date | null) => {
    if (date) {
      setStartDate1(date);
    }
  };
  const fetchData = async () => {
    setLoader(true);
    const data = {
      fromDate: startDate.toISOString().slice(0, 10),
      toDate: startDate1.toISOString().slice(0, 10),
    };
    try {
      const response = await axios.post(
        "https://loudfolder.com/dmanalytics",
        data,
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
      setTweets(response?.data?.STATUS_RESPONSE);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoader(false);
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
                        dateFormat="yyyy/MM/dd"
                      />
                    </InputGroup>
                  </div>
                  <div className="form-group ms-2">
                    To Date
                    <InputGroup className="">
                      <InputGroup.Text className="input-group-text text-muted">
                        <i className="ri-calendar-line"></i>
                      </InputGroup.Text>
                      <DatePicker
                        selected={startDate1}
                        onChange={handleDateChange1}
                        dateFormat="yyyy/MM/dd"
                      />
                    </InputGroup>
                  </div>
                  <button
                    className="btn btn-sm text-nowrap  bgColor text-white ms-2 mt-4 mb-4"
                    type="submit"
                    onClick={fetchData}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        {loader ? (
            <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
             {<Loader/>}
            </div>
          ) : (
          <Row>
            <Col xxl={3}>
              <Card className="custom-card">
                <Card.Header className="align-items-center">
                  <div className="me-2"></div>
                  <div className="flex-fill">
                    <h1 className="fw-semibold fs-14 d-block text-truncate">
                      Total DMS Recived
                    </h1>
                  </div>
                  <div>
                    <i className="bi bi-check-all fw-bold fs-4"></i>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p className="fw-semibold mb-1 fs-16">
                    {tweets?.totalRecivedDms}
                  </p>
                  <p className="text-muted mb-3">Time Stamp Data</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={3}>
              <Card className="custom-card">
                <Card.Header className="align-items-center">
                  <div className="me-2"></div>
                  <div className="flex-fill">
                    <h1 className="fw-semibold fs-14 d-block text-truncate">
                      Total Acknowledge DMS
                    </h1>
                  </div>
                  <div>
                    <i className="bi bi-clipboard2-check fw-bold fs-4"></i>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p className="fw-semibold mb-1 fs-16">
                    {tweets?.totalAckDms}
                  </p>
                  <p className="text-muted mb-3">Time Stamp Data</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={3}>
              <Card className="custom-card">
                <Card.Header className="align-items-center">
                  <div className="me-2"></div>
                  <div className="flex-fill">
                    <h1 className="fw-semibold fs-14 d-block text-truncate">
                      Total DMS Recived
                    </h1>
                  </div>
                  <div>
                    <i className="bi bi-send fw-bold fs-4"></i>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p className="fw-semibold mb-1 fs-16">
                    {tweets?.totalUnAckDms}
                  </p>
                  <p className="text-muted mb-3">Time Stamp Data</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={3}>
              <Card className="custom-card">
                <Card.Header className="align-items-center">
                  <div className="me-2"></div>
                  <div className="flex-fill">
                    <h1 className="fw-semibold fs-14 d-block text-truncate">
                      Total Sent DMS
                    </h1>
                  </div>
                  <div>
                    <i className="bi bi-envelope-check fw-bold fs-4"></i>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p className="fw-semibold mb-1 fs-16">
                    {tweets?.totalSentDms}
                  </p>
                  <p className="text-muted mb-3">Time Stamp Data</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={3}>
              <Card className="custom-card">
                <Card.Header className="align-items-center">
                  <div className="me-2"></div>
                  <div className="flex-fill">
                    <h1 className="fw-semibold fs-14 d-block text-truncate">
                      Total UnSent DMS
                    </h1>
                  </div>
                  <div>
                    <i className="bi bi-envelope-dash fw-bold fs-4"></i>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p className="fw-semibold mb-1 fs-16">
                    {tweets?.totalUnSentDms}
                  </p>
                  <p className="text-muted mb-3">Time Stamp Data</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          )}
        </Col>
      </Row>
     
    </Fragment>
  );
};

export default Jobs;
