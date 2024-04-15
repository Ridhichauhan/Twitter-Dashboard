import { FC, Fragment } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { Tweetdata1 } from "../tweet/joblistdata";

interface JobdetailsProps {}

const Jobdetails: FC<JobdetailsProps> = () => {
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
                  <h1 className="fs-6 fw-bold">Alerts</h1>
                </div>
                <div className="d-flex flex-column flex-sm-row">
                  <button
                    className="btn btn-sm text-nowrap  bgColor text-white ms-2"
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
                      <th scope="col">Alerts </th>
                      <th scope="col">Status</th>
                      <th scope="col">Time</th>
                    </tr>
                  </thead>
                  {Tweetdata1.map((item: any, index: number) => (
                    <tbody key={index}>
                      <tr>
                        <th scope="row">{item.id}</th>
                        <td>
                          <span className="badge bg-light fs-13 text-dark">
                            {item.alerts}
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            {item.status}
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            {item.time}
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

export default Jobdetails;
