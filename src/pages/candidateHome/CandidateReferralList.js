import React from 'react';
import Card from 'react-bootstrap/Card'; // Import Bootstrap Card component
import ListGroup from 'react-bootstrap/ListGroup'; // Import Bootstrap ListGroup component
import { Container, Row, Col, Button, Form } from 'react-bootstrap';


const CandidateReferralList = ({ searchQuery }) => {
  // Mock data
  const referralList = [
    { id: 1, referralId: 'REF001', details: 'Referral details...', image: '../microsoft.jpg' },
    { id: 2, referralId: 'REF002', details: 'Referral details...', image: '../microsoft.jpg' },
    { id: 3, referralId: 'REF003', details: 'Referral details...', image: '../microsoft.jpg' },
    { id: 4, referralId: 'REF004', details: 'Referral details...', image: '../microsoft.jpg' },
    { id: 5, referralId: 'REF005', details: 'Referral details...', image: '../microsoft.jpg' },
    { id: 6, referralId: 'REF006', details: 'Referral details...', image: '../microsoft.jpg' },
    // Add more referral items as needed
  ];

  // Filter based on searchQuery
  const filteredReferrals = referralList.filter(referral =>
    referral.referralId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // <Card>
    //   <Card.Header className='ref-heading' as="h5">Candidate Referral List</Card.Header>
    //   <Card.Body className='ref-body'>
    //     <ListGroup variant="flush">
    //       {filteredReferrals.map(referral => (
    //         // <ListGroup.Item key={referral.id}>
    //         //   <p>{referral.referralId}</p>
    //         //   <p>{referral.details}</p>
    //         // </ListGroup.Item>
    //         <Card style={{ width: '18rem' }} className="mb-4" key={referral.id}>
    //           <Card.Img variant="top" src={referral.image} alt={referral.referralId} />
    //           <Card.Body>
    //             <Card.Text>{referral.details}</Card.Text>
    //           </Card.Body>
    //         </Card>
    //       ))}
    //     </ListGroup>
    //   </Card.Body>
    // </Card>


    <Col md={12} className='wrap'>
      {filteredReferrals.map(referral => (
        <div className="card mb-4" style={{ width: '16rem' }} key={referral.id}>
          <img src={referral.image} className="card-img-top" alt={referral.referralId} />
          <div className="card-body">
            <p className="card-text">{referral.details}</p>
          </div>
        </div>
      ))}
    </Col>
  );
};

export default CandidateReferralList;
