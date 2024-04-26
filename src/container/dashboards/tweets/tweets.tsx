import { FC, Fragment, useEffect, useState } from "react";
import {
  Card,
  Col,
  InputGroup,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import axios from "axios";
import Loader from "../../../components/common/loader/loader";
import twitter from "../../../assets/images/media/twiiter.png";

interface TweetsProps {}
const Tweets: FC<TweetsProps> = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [tweets, setTweets] = useState<any[]>([]);
  const [loader, setLoader] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const authToken =
    "eyJhbGciOiJIUzI1NiJ9.NjQyZWE3OTlmNWFlZDRkYjljM2Y0ZGNk.awn0t67fZapAxQLIs9NmdPWHklkT4gL3uaVmCZuTpX4";
  useEffect(() => {
    fetchData();
  }, []);
  const handleDateChange = (date: Date | null) => {
    if (date) {
      if (date < new Date("2024-04-22")) {
        setShowToast(true);
        return;
      }
      setStartDate(date);
    }
  };
  const handleDateChange1 = (date: Date | null) => {
    if (date) {
      if (date < new Date("2024-04-22")) {
        setShowToast(true);
        return;
      }
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
        "https://loudfolder.com/analytics",
        data,
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
      console.log(response);
      setTweets(response?.data?.STATUS_RESPONSE);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoader(false);
    }
  };
  return (
    <Fragment>
      <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
        <Toast
          id="topright-Toast"
          className="toast colored-toast bg-primary-transparent text-primary"
          onClose={() => setShowToast(false)}
          show={showToast}
        >
          <Toast.Header className="toast-header bgColor text-fixed-white">
            <img
              className="bd-placeholder-img rounded me-2"
              src={twitter}
              alt="..."
            />
            <strong className="me-auto">Twitter Dashboard</strong>
          </Toast.Header>
          <Toast.Body className="toast-body blueColor">
            Please select your date on and after 23 April 2024.
          </Toast.Body>
        </Toast>
      </ToastContainer>
      <Row>
        <Col>
          <Card.Header className="d-flex align-items-center justify-content-between flex-wrap gap-3 p-4"></Card.Header>
        </Col>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Body className="">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <div className="d-flex flex-wrap gap-1">
                  <h1 className="fs-6 fw-bold">Tweets</h1>
                </div>
                <div className="d-flex flex-column flex-sm-row">
                  <div className="form-group">
                    From Date
                    <InputGroup className="">
                      <InputGroup.Text className="input-group-text text-muted">
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
                        {" "}
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
                    className="btn btn-sm text-nowrap bgColor text-white ms-2 mt-4 mb-2"
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
              {<Loader />}
            </div>
          ) : (
            <Row>
              <Col xxl={3}>
                <Card className="custom-card">
                  <Card.Header className="align-items-center">
                    <div className="flex-fill">
                      <h1 className="fw-semibold fs-14 d-block text-truncate">
                        Total Recived Tweets
                      </h1>
                    </div>
                    <div className="">
                      <i className="bi bi-check-all fw-bold fs-4"></i>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <p className="fw-semibold mb-1 fs-16">
                      {(tweets as any)?.totalRecivedTweets}
                    </p>
                    <p className="text-muted mb-3">Time Stamp Data</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3}>
                <Card className="custom-card">
                  <Card.Header className="align-items-center">
                    <div className="flex-fill">
                      <h1 className="fw-semibold fs-14 d-block text-truncate">
                        Total Acknowledge Tweets
                      </h1>
                    </div>
                    <div className="">
                      <i className="bi bi-clipboard2-check fw-bold fs-4"></i>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <p className="fw-semibold mb-1 fs-16">
                      {(tweets as any)?.totalAckTweets}
                    </p>
                    <p className="text-muted mb-3">Time Stamp Data</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3}>
                <Card className="custom-card">
                  <Card.Header className="align-items-center">
                    <div className="flex-fill">
                      <h1 className="fw-semibold fs-14 d-block text-truncate">
                        Total Unacknowledge Tweets
                      </h1>
                    </div>
                    <div className="">
                      <i className="bi bi-send fw-bold fs-4"></i>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <p className="fw-semibold mb-1 fs-16">
                      {(tweets as any)?.totalUnAckTweets}
                    </p>
                    <p className="text-muted mb-3">Time Stamp Data</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3}>
                <Card className="custom-card">
                  <Card.Header className="align-items-center">
                    <div className="flex-fill">
                      <h1 className="fw-semibold fs-14 d-block text-truncate">
                        Total Sent Tweets
                      </h1>
                    </div>
                    <div className="">
                      <i className="bi bi-envelope-check fw-bold fs-4"></i>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <p className="fw-semibold mb-1 fs-16">
                      {(tweets as any)?.totalSentTweets}
                    </p>
                    <p className="text-muted mb-3">Time Stamp Data</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3}>
                <Card className="custom-card">
                  <Card.Header className="align-items-center">
                    <div className="flex-fill">
                      <h1 className="fw-semibold fs-14 d-block text-truncate">
                        Total Unsent Tweets
                      </h1>
                    </div>
                    <div className="">
                      <i className="bi bi-envelope-dash fw-bold fs-4"></i>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <p className="fw-semibold mb-1 fs-16">
                      {(tweets as any)?.totalUnSentTweets}
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
export default Tweets;
