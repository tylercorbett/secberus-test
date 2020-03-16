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
      <SignUp/>
    </div>
  );
}

export default App;
