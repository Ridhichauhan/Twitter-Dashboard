import { FC, Fragment, useEffect, useState } from "react";
import {
  Card,
  Col,
  InputGroup,
  Pagination,
  Row,
  Table,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import axios from "axios";
import Loader from "../../../../components/common/loader/loader";
import twitter from "../../../../assets/images/media/twiiter.png";

interface TweetProps {}

const Tweet: FC<TweetProps> = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [tweets, setTweets] = useState<any[]>([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const authToken =
    "eyJhbGciOiJIUzI1NiJ9.MTU1MjI1ODE1NTA4MTQ1MzU2OA.lTui2zIUqqskGj5K4keIId0f-SRCQpUuH7zapOJ0_GI";
  useEffect(() => {
    fetchData();
  }, [page]);
  const handleDateChange = (date: Date | null) => {
    console.log("date", date);
    if (date) {
      if (date < new Date("2024-04-22")) {
        setShowToast(true);
        return;
      }
      setStartDate(date);
      setPage(1);
    }
  };
  const handleDateChange1 = (date: Date | null) => {
    console.log("date1", date);

    if (date) {
      if (date < new Date("2024-04-22")) {
        setShowToast(true);
        return;
      }
      setStartDate1(date);
      setPage(1);
    }
  };
  const fetchData = async () => {
    const startUTC = new Date(startDate).toISOString().slice(0, 16);
    const endUTC = new Date(startDate1).toISOString().slice(0, 16);
    console.log("startUTC", startUTC);
    console.log("endUTC", endUTC);
    // startUTC.setUTCHours(0, 0, 0, 0);
    // endUTC.setUTCHours(23, 59, 59, 999);

    setLoader(true);
    try {
      const response = await axios.get(
        `https://loudfolder.com/getTweetsDetailsForDateRange?page=${page}`,
        {
          params: {
            startDate: startUTC,
            endDate: endUTC,
          },
          headers: {
            Authorization: authToken,
          },
        }
      );
      const sortedTweets = response?.data?.data?.tweetsDataToReturn.sort(
        (a: any, b: any) => {
          return (
            new Date(a.receivedTime).getTime() -
            new Date(b.receivedTime).getTime()
          );
        }
      );
      setTweets(sortedTweets);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoader(false);
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
      <Col>
        <Card.Header className="p-4 g-3"></Card.Header>
      </Col>
      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Body className="">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <div className="d-flex flex-wrap gap-1">
                  <h1 className="fs-6 fw-bold">Tweet</h1>
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
                        dateFormat="yyyy/MM/dd h:mm aa"
                        showTimeInput
                        wrapperClassName="date-picker-wrapper"
                        popperClassName="date-picker-popper"
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
                        showTimeInput
                        dateFormat="yyyy/MM/dd h:mm aa"
                        wrapperClassName="date-picker-wrapper"
                        popperClassName="date-picker-popper"
                      />
                    </InputGroup>
                  </div>
                  <button
                    className="btn btn-sm text-nowrap  bgColor text-white ms-2 mt-4 mb-2"
                    type="submit"
                    onClick={fetchData}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Card.Body>
          </Card>
          {loader ? (
            <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
              {<Loader />}
            </div>
          ) : (
            <>
              <Card>
                <Card.Body>
                  <div className="table-responsive">
                    <Table
                      bordered
                      className="table text-nowrap border-primary"
                    >
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          {/* <th scope="col">Url</th> */}
                          <th scope="col">Tweet Id</th>
                          <th scope="col">Tweet Recived</th>
                          <th scope="col">Sent to SMGT</th>
                          <th scope="col">Acknowledgment</th>
                        </tr>
                      </thead>
                      {tweets.length > 0 && (
                        <tbody>
                          {tweets?.map((item: any, index: number) => (
                            <tr key={index + (page - 1) * 10}>
                              <th scope="row">
                                {index + 1 + (page - 1) * 10}.
                              </th>
                              {/* <td>
                              <span className="badge bg-light fs-13 text-dark">
                                <Link
                                  className="blueColor fw-semibold text-break"
                                  to="https://twitter.com"
                                  target="_blank"
                                >
                                  <u>https://twitter.com</u>
                                </Link>
                              </span>
                            </td> */}
                              <td>
                                <div className="d-flex align-items-center">
                                  {item.tweetId}
                                </div>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  {new Date(item.receivedTime).toLocaleString(
                                    "en-IN",
                                    {
                                      timeZone: "Asia/Kolkata",
                                      hour12: true,
                                    }
                                  )}
                                </div>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  {item?.sentToSMGT === true ? "yes" : "failed"}
                                </div>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  {item.acknowledgement}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      )}
                    </Table>
                  </div>
                </Card.Body>
              </Card>
              {tweets.length > 0 && (
                <Card.Body className="d-flex justify-content-end card-body d-flex flex-wrap">
                  <nav aria-label="..." className="me-3">
                    <Pagination className="pagination">
                      <Pagination.Item
                        onClick={() => {
                          setPage(page - 1);
                        }}
                        disabled={page === 1}
                        className="pagination"
                      >
                        Previous
                      </Pagination.Item>
                      <div
                        aria-current="page"
                        className="p-2 text-white"
                        style={{ background: "#238ae6" }}
                      >
                        {page}
                      </div>
                      <div
                        // href={#}
                        onClick={() => {
                          setPage(page + 1);
                        }}
                        className="p-2 bg-white rounded-2 fw-semibold"
                        style={{ color: "#238ae6" }}
                      >
                        Next
                      </div>
                    </Pagination>
                  </nav>
                </Card.Body>
              )}
            </>
          )}
        </Col>
      </Row>
    </Fragment>
  );
};

export default Tweet;
