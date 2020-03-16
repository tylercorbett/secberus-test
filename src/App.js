import React, { useState } from 'react';
import './App.scss';
import './reset.css';
import Form from './components/form/Form';
import SignUp from './components/sign-up/SignUp';
import { submitLoan } from './services/loans';


function App() {
  const [isDisqualified, setIsDisqualified] = useState(false);
  const [isQuoteSubmitted, setIsQuoteSubmitted] = useState(false);
  const [quoteReponse, setQuoteResponse] = useState(null);

  const handleQuoteSubmit = async formData => {
    const response = await submitLoan(formData).catch(console.error);
    
    if (response !== 'Good quote') {
      setIsDisqualified(true);
      setQuoteResponse(response);
    }

    setIsQuoteSubmitted(true);
  };

  return (
    <div className="App">
      <header>Tyler's Auto Loans</header>
      {
        !isQuoteSubmitted 
          ? <Form 
              onSubmit={handleQuoteSubmit}
            />
          : isDisqualified 
            ? <div className="disqualified column">
                <h2>Sorry... you aren't qualified.</h2>
                <br/>
                <img src="https://image.shutterstock.com/image-vector/sad-face-emoji-vector-600w-1288383397.jpg" alt="Sad face" />
                <br />
                <p>{quoteReponse}</p>
                <br/>
                <h3>Questions? Reach our customer support at: 555-5555</h3>
              </div>
            : <SignUp/>
        }
    </div>
  );
}

export default App;
