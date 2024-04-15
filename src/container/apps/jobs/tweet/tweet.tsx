import { FC, Fragment ,useState } from "react";
import {
  Card,
  Col,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Tweetdata } from "./joblistdata";

interface JobslistProps {}

const Jobslist: FC<JobslistProps> = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setStartDate(date);
    }
  };
  return (
    <Fragment>
      <Col>
        <Card.Header className="p-3"></Card.Header>
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
          <Card>
            <Card.Body>
              <div className="table-responsive">
                <Table bordered className="table text-nowrap  border-primary">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Url</th>
                      <th scope="col">Tweet Id</th>
                      <th scope="col">Tweet Recived</th>
                      <th scope="col">Sent to SMGT</th>
                      <th scope="col">Acknowledgment</th>
                    </tr>
                  </thead>
                  {Tweetdata.map((item:any ,index:number)=>(
                  <tbody key={index}>
                    <tr >
                      <th scope="row">{item.id}</th>
                      <td>
                        <span className="badge bg-light fs-13 text-dark">
                         {item.url}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          {item.tweetid}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          {item.tweetrec}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                         {item.sent}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                         {item.action}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  ))}
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Jobslist;
