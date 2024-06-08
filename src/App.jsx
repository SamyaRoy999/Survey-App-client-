
import { useState } from 'react';

const SurveyDetail = () => {
  // Fake survey data
  const survey = {
    id: '1',
    title: 'Customer Satisfaction Survey',
    description: 'We would like to know your satisfaction level with our services.',
    options: ['yes', 'no'],
    votes: { yes: 10, no: 5 }
  };

  const [vote, setVote] = useState('');
  const [result, setResult] = useState({ yes: survey.votes.yes, no: survey.votes.no });

  const handleVote = () => {
    if (vote === '') {
      alert('Please select an option to vote.');
      return;
    }

    // Update fake data with vote
    if (vote === 'yes') {
      setResult({ ...result, yes: result.yes + 1 });
    } else if (vote === 'no') {
      setResult({ ...result, no: result.no + 1 });
    }

    alert('Vote submitted successfully.');
  };

  return (
    <div>
      <h1>{survey.title}</h1>
      <p>{survey.description}</p>
      <div>
        <h3>Vote</h3>
        {survey.options.map((option, index) => (
          <label key={index}>
            <input type="radio" name="vote" value={option} onChange={(e) => setVote(e.target.value)} />
            {option}
          </label>
        ))}
        <button onClick={handleVote}>Submit Vote</button>
      </div>
      <div>
        <h3>Results</h3>
        <p>Yes: {result.yes}</p>
        <p>No: {result.no}</p>
      </div>
    </div>
  );
};

export default SurveyDetail;






