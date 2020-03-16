import React from 'react';
import './App.scss';
import './reset.css';
import Form from './components/form/Form';
import SignUp from './components/sign-up/SignUp';


function App() {

  const handleQuoteSubmit = formData => {
    console.log(formData);
  };

  return (
    <div className="App">
      <header>Tyler's Auto Loans</header>
      {/* <Form 
        onSubmit={handleQuoteSubmit}
      /> */}
      {/* <SignUp/> */}
      <div className="disqualified column">
        <h2>Sorry... you aren't qualified.</h2>
        <br/>
        <img src="https://image.shutterstock.com/image-vector/sad-face-emoji-vector-600w-1288383397.jpg" alt="Sad face" />
        <br />
        <p>your credit is not high enough</p>
        <br/>
        <h3>Questions? Reach our customer support at: 555-5555</h3>
      </div>
    </div>
  );
}

export default App;
