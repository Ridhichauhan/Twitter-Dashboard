import axios from "axios";
import { FC, Fragment, useEffect, useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";

interface AlertProps {
  APIs:string;
  dataBaseStatus:string;
  server:string;
  tweetsReceived: string;
}

const Alert: FC<AlertProps> = () => {
  const [tweetsData, setTweetsData] = useState<any>(null);
  const authToken =
    "eyJhbGciOiJIUzI1NiJ9.MTU1MjI1ODE1NTA4MTQ1MzU2OA.lTui2zIUqqskGj5K4keIId0f-SRCQpUuH7zapOJ0_GI";
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res = await axios.get("https://loudfolder.com/getAlertStatus", {
        headers: {
          Authorization: authToken,
        },
      });
      setTweetsData(res?.data?.data);
    } catch (error) {
      console.error("Error fetching Data", error);
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
                  <h1 className="fs-6 fw-bold">Alerts</h1>
                </div>
                <div className="d-flex flex-column flex-sm-row">
                  <button
                    className="btn btn-sm text-nowrap  bgColor text-white ms-2"
                    type="submit"
                    onClick={fetchData}
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
                <Table bordered hover className="table table-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Alert</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span>1.</span>
                      </td>
                      <td>
                        <span className="blueColor">APIs</span>
                      </td>
                      <td className="text-muted">{tweetsData?.APIs}</td>
                    </tr>

                    <tr>
                      <td>
                        <span>2.</span>
                      </td>
                      <td>
                        <span className="blueColor">DataBase Status</span>
                      </td>
                      <td>
                        <span className="text-muted">{tweetsData?.dataBaseStatus}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>3.</span>
                      </td>
                      <td>
                        <span className="blueColor">Server</span>
                      </td>
                      <td>
                        <span className="text-muted">{tweetsData?.server}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>4.</span>
                      </td>
                      <td>
                        <span className="blueColor">Tweets Received</span>
                      </td>
                      <td>
                        <span className="text-muted">{tweetsData?.tweetsReceived}</span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Alert;
