import useAuth from "@/lib/hook/useAuth";
import axios from "axios";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const SingleJobPost = (props) => {
  const { apiUrl } = useAuth();
  const { getId } = props;
  console.log({ getId });

  let [singleJobPost, setSingleJobPost] = useState(null);

  console.log(singleJobPost);

  const handleDownload = () => {
    const doc = new jsPDF("p", "mm", "a4");

    const { jobTitle, deadline, salary, location, time } = singleJobPost;
    doc.setFontSize(14);
    doc.text(new Date().toLocaleDateString(), 10, 20);
    doc.setFont("helvetica", "bold");

    // doc.rect(10, 20, 50, 50);
    doc.setTextColor("#59330e");
    doc.text("Sultan Tea Job Post", 10, 30);
    doc.setFont("helvetica", "");

    doc.setTextColor(0, 0, 0);
    doc.line(10, 32, 60, 32);
    doc.setFontSize(12);

    doc.text(`Job Title: ${jobTitle}`, 10, 40);
    doc.text(`Deadline: ${deadline}`, 10, 50);
    doc.text(`Location: ${location}`, 10, 60);
    doc.text(`Salary: ${salary}`, 10, 70);
    doc.text(`Time: ${time}`, 10, 80);

    doc.save(`sultan-tea-${jobTitle}-job-post.pdf`);
  };

  useEffect(() => {
    if (getId !== null) {
      axios
        .get(`${apiUrl.apiRootUrl}/api/v1/carrier/${getId}`)
        .then((res) => {
          setSingleJobPost(res.data);
        })
        .catch((error) => {
          console.log({ error });
        });
    }
  }, [getId, apiUrl]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          View an job post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row ">
          <div className="col-md-12 ">
            <div>
              <h4 className="fs-5 fw-bold cus-color-secondary mb-3 ">
                {singleJobPost?.jobTitle} job post
              </h4>
              <p className="fs-5 ">Deadline: {singleJobPost?.deadline} </p>

              <div className="my-3">
                <table className="table border table-striped">
                  <tbody>
                    <tr>
                      <td>Job Title:</td>
                      <td>{singleJobPost?.jobTitle}</td>
                    </tr>
                    <tr>
                      <td>Location:</td>
                      <td>{singleJobPost?.location}</td>
                    </tr>
                    <tr>
                      <td>Salary:</td>
                      <td>{singleJobPost?.salary}</td>
                    </tr>
                    <tr>
                      <td>Time:</td>
                      <td>{singleJobPost?.time}</td>
                    </tr>
                    <tr>
                      <td>Vacancy:</td>
                      <td>{singleJobPost?.vacancy}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <button
                className="btn cus-bg-secondary text-light fw-bold"
                onClick={() => {
                  handleDownload();
                }}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SingleJobPost;
