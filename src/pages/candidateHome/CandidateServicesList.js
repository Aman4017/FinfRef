import React from 'react';
import Card from 'react-bootstrap/Card'; // Import Bootstrap Card component
import ListGroup from 'react-bootstrap/ListGroup'; // Import Bootstrap ListGroup component
import { Container, Row, Col, Button, Form } from 'react-bootstrap';



const CandidateServicesList = ({ searchQuery }) => {
  // Mock data
  const servicesList = [
    { id: 1, serviceId: 'SERV001', details: 'Service details...', image: '../microsoft.jpg' },
    { id: 2, serviceId: 'SERV002', details: 'Service details...', image: '../microsoft.jpg' },
    // Add more service items as needed
  ];

  // Filter based on searchQuery
  const filteredServices = servicesList.filter(service =>
    service.serviceId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
    <Col md={12} className='wrap'>
      {filteredServices.map(servicesList => (
        <div className="card mb-4" style={{ width: '16rem' }} key={servicesList.id}>
          <img src={servicesList.image} className="card-img-top" alt={servicesList.serviceId} />
          <div className="card-body">
            <p className="card-text text-wrap">{servicesList.details}</p>
          </div>
        </div>
      ))}
    </Col>
  );
};

export default CandidateServicesList;
