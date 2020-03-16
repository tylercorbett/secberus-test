import React from 'react';
import './App.scss';
import './reset.css';
import Form from './components/form/Form';


function App() {

  const handleSubmit = formData => {
    console.log(formData);
  };

  return (
    <div className="App">
      <header>Tyler's Auto Loans</header>
      <Form 
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
