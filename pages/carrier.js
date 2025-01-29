import HeroBanner from "@/components/common/Banner";
import SingleJobPost from "@/components/common/SingleJobPost";

import { useState } from "react";
import { Pagination, Table } from "react-bootstrap";
import { AiOutlineCloudDownload, AiOutlineEye } from "react-icons/ai";

// import { useRouter } from 'next/router'
// export const getStaticProps = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/carrier`);
//   const data = await res.json();
//   return {
//     props: { data },
//     revalidate: 10,
//   };
// };
export const getStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiUrl = `${baseUrl}/api/v1/carrier`;
  console.log('Fetching data from:', apiUrl);

  try {
    const res = await fetch(apiUrl);

    if (!res.ok) {
      console.error('Failed to fetch data:', res.statusText);
      return {
        notFound: true,
      };
    }

    const data = await res.json();
    return {
      props: { data },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { data: [] }, // Return an empty array or handle the error as needed
      revalidate: 3,
    };
  }
};
function Carrier({ data }) {
  const datasss = [
    {
      id: 1,
      jobTitle: "Web Developer",
      vacancy: 3,
      location: "New York",
      salary: "$80,000 - $100,000",
      deadline: "2023-03-15",
      time: "Full-time",
    },
    {
      id: 2,
      jobTitle: "Graphic Designer",
      vacancy: 2,
      location: "San Francisco",
      salary: "$60,000 - $80,000",
      deadline: "2023-03-20",
      time: "Part-time",
    },
    {
      id: 3,
      jobTitle: "Software Engineer",
      vacancy: 4,
      location: "Boston",
      salary: "$90,000 - $120,000",
      deadline: "2023-03-25",
      time: "Full-time",
    },
    {
      id: 4,
      jobTitle: "Project Manager",
      vacancy: 1,
      location: "Chicago",
      salary: "$100,000 - $130,000",
      deadline: "2023-03-30",
      time: "Full-time",
    },
    {
      id: 5,
      jobTitle: "Marketing Manager",
      vacancy: 2,
      location: "Los Angeles",
      salary: "$80,000 - $100,000",
      deadline: "2023-04-05",
      time: "Part-time",
    },
    {
      id: 6,
      jobTitle: "Sales Representative",
      vacancy: 3,
      location: "Seattle",
      salary: "$50,000 - $70,000",
      deadline: "2023-04-10",
      time: "Full-time",
    },
    {
      id: 7,
      jobTitle: "Data Analyst",
      vacancy: 2,
      location: "Houston",
      salary: "$70,000 - $90,000",
      deadline: "2023-04-15",
      time: "Part-time",
    },
    {
      id: 8,
      jobTitle: "UX Designer",
      vacancy: 1,
      location: "Atlanta",
      salary: "$80,000 - $100,000",
      deadline: "2023-04-20",
      time: "Full-time",
    },
    {
      id: 9,
      jobTitle: "Customer Service Representative",
      vacancy: 4,
      location: "Miami",
      salary: "$30,000 - $50,000",
      deadline: "2023-04-25",
      time: "Full-time",
    },
    {
      id: 10,
      jobTitle: "HR Manager",
      vacancy: 1,
      location: "Dallas",
      salary: "$90,000 - $120,000",
      deadline: "2023-04-30",
      time: "Full-time",
    },
    {
      id: 11,
      jobTitle: "Front-end Developer",
      vacancy: 2,
      location: "Denver",
      salary: "$80,000 - $100,000",
      deadline: "2023-05-05",
      time: "Part-time",
    },
    {
      id: 12,
      jobTitle: "Back-end Developer",
      vacancy: 3,
      location: "Phoenix",
      salary: "$90,000 - $120,000",
      deadline: "2023-05-10",
      time: "Full-time",
    },
    {
      id: 13,
      jobTitle: "UI Designer",
      vacancy: 1,
      location: "Portland",
      salary: "$70,000 - $90,000",
      deadline: "2023-05-15",
      time: "Full-time",
    },
    {
      id: 14,
      jobTitle: "Product Manager",
      vacancy: 2,
      location: "Austin",
      salary: "$100,000 - $130,000",
      deadline: "2023-05-20",
      time: "Part-time",
    },
    {
      id: 15,
      jobTitle: "Content Writer",
      vacancy: 3,
      location: "Washington DC",
      salary: "$40,000 - $60,000",
      deadline: "2023-05-25",
      time: "Full-time",
    },
  ];

  console.log({ data });

  const [modalShow, setModalShow] = useState(false);
  const [singleJobPostId, setSingleJobPostId] = useState(null);

  const ITEMS_PER_PAGE = 12;
  // const router=useRouter()
  // console.log(router.pathname)
  const [currentPage, setCurrentPage] = useState(1);

  const lastItemIndex = currentPage * ITEMS_PER_PAGE;
  const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
  const currentItems = data.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* <RouteNavSlider router="Carrier" /> */}
      <HeroBanner name="Carrier" />

      <SingleJobPost
        show={modalShow}
        onHide={() => setModalShow(false)}
        getId={singleJobPostId}
      />
      <div className="container  my-5">
        <h1 className="fs-3 text-center cus-color-primary my-2">
          Vacancy Announcement
        </h1>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Vacancy</th>
              <th>Location</th>
              <th>Salary</th>
              <th>Deadline</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item.id}>
                <td>{firstItemIndex + index + 1}</td>
                <td>{item.jobTitle}</td>
                <td>{item.vacancy}</td>
                <td>{item.location}</td>
                <td>{item.salary}</td>
                <td>{item.deadline}</td>
                <td>{item.time}</td>

                <td>
                  <span>
                    <AiOutlineEye
                      size={20}
                      className="cus-color-primary"
                      onClick={() => {
                        setModalShow(true), setSingleJobPostId(item._id);
                      }}
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination className="d-flex justify-content-end my-5">
          <Pagination.First onClick={() => handlePageChange(1)} />
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index}
              active={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last onClick={() => handlePageChange(totalPages)} />
        </Pagination>
      </div>
    </>
  );
}

export default Carrier;
