import React, { useState } from 'react';
import CandidateReferralList from './candidateHome/CandidateReferralList';
import CandidateServicesList from './candidateHome/CandidateServicesList';
import SearchComponent from './candidateHome/SearchComponent';
import LogoutButton from './candidateHome/LogoutButton';
import './candidateHome/candidate.css'


const CandidateHome = () => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Handler for search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="candidate-home">
      <h1>Welcome Home</h1>
      <div className='cand-header'>
        <SearchComponent value={searchQuery} onChange={handleSearchChange} />
        <LogoutButton />
      </div>

      <div className="card-container">
        <h3>Referrals</h3>
        <CandidateReferralList searchQuery={searchQuery} />
        <h3>Services</h3>
        <CandidateServicesList searchQuery={searchQuery} />
      </div>

      
    </div>
  );
};

export default CandidateHome;
