// import React from 'react';
// import { Card, Row, Col, Image } from 'react-bootstrap';

// const Achivements = ( ) => {
// //   const achievement = props.achievement;
// const achievement = {
//     backgroundImage: '/public/New folder/achievement.jpg',
//     satisfiedClients: '100+',
//     expertTeam: '50+',
//     activeProduct: '20+',
//     awardWining: '10+',
//   };
//   return (
//     <div >
//         {/* style={{ backgroundImage: `url(${achievement.backgroundImage})`, backgroundSize: 'cover', height: '50vh' }} */}
//          <Row className="  align-items-center  " style={{ backgroundImage: `url(https://i.ibb.co/vVN9rcm/achievement.jpg)`, backgroundSize: 'cover', height: '50vh' }}>
//       <Col xs={12} sm={3} md={3} className="text-center">
//         <h2 className="text-light fs-2 fw-bolder">{achievement.satisfiedClients}</h2>
//         <p className="text-light fs-4 fw-bold">Satisfied Clients</p>
//       </Col>
//       <Col xs={12} sm={3} md={3} className="text-center">
//         <h3 className="text-light fs-2 fw-bolder">{achievement.expertTeam}</h3>
//         <p className="text-light  fs-4 fw-bold">Expert Team</p>
//       </Col>
//       <Col xs={12} sm={3} md={3} className="text-center">
//         <h3 className="text-light fs-2 fw-bolder">{achievement.activeProduct}</h3>
//         <p className="text-light  fs-4 fw-bold">Active Product</p>
//       </Col>
//       <Col xs={12} sm={3} md={3} className="text-center">
//         <h3 className="text-light fs-2 fw-bolder">{achievement.awardWining}</h3>
//         <p className="text-light  fs-4 fw-bold">Award Wining</p>
//       </Col>
//     </Row>
//     </div>
//   );
// };

// export default Achivements;

import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";

const Achievements = () => {
  const achievement = {
    backgroundImage: "/public/New folder/achievement.jpg",
    satisfiedClients: "3000+",
    expertTeam: "150+",
    activeProduct: "30+",
    awardWining: "200+",
  };

  return (
    <div className="px-1 ">
      <Row
        className="align-items-center p-5"
        style={{
          backgroundImage: `url(https://i.ibb.co/vVN9rcm/achievement.jpg)`,
          backgroundSize: "cover",
          height: "auto",
          opacity: "1",
        }}
      >
        <Col xs={12} sm={6} md={3} className="text-center mb-4">
          <h2 className="text-light fs-2 fw-bolder">
            {achievement.satisfiedClients}
          </h2>
          <p className="text-light fs-4 fw-bold">Satisfied Clients</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="text-center mb-4">
          <h3 className="text-light fs-2 fw-bolder">
            {achievement.expertTeam}
          </h3>
          <p className="text-light fs-4 fw-bold">Expert Team</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="text-center mb-4">
          <h3 className="text-light fs-2 fw-bolder">
            {achievement.activeProduct}
          </h3>
          <p className="text-light fs-4 fw-bold">Active Product</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="text-center mb-4">
          <h3 className="text-light fs-2 fw-bolder">
            {achievement.awardWining}
          </h3>
          <p className="text-light fs-4 fw-bold">Award Winning</p>
        </Col>
      </Row>
    </div>
  );
};

export default Achievements;
