import React, { useState } from 'react';
import styled from 'styled-components';
import * as SignUpComponents from './SignUpComponents';
import * as FormComponents from '../form/FormComponents';

const Frame = styled.section(props => ({
  'h2': {
    fontSize: '2rem',
    fontWeight: '700',
    textAlign: 'center',
    margin: '1rem',
  },
}))

const SignUp = () => {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [validatePassword, setValidatePassword] = useState(null);

  const handleFormSubmit = e => {
    e.preventDefault();

    if (password !== validatePassword) {
      alert('Passwords do not match. Please try again!');
      return;
    }
    
    if (password.length < 8) {
      alert('Password must be at least 8 characters!');
      return;
    }

    if (password.match(/^[A-Za-z]+$/)) {
      alert('Password must include at least one number or special character');
      return;
    }

    alert(`Sign up successful for user with details: username: ${username}, password: ${password}`)
  };
  return (
    <Frame>
      <h2>Create a new account</h2>

      <form onSubmit={handleFormSubmit}>
        <div className="column">
          <FormComponents.Label>
            Username
          </FormComponents.Label>
          <FormComponents.Input autoFocus onChange={event => setUserName(event.target.value)} required type="email"/>
        </div>
        <div className="column">
          <FormComponents.Label>
            Password
          </FormComponents.Label>
          <FormComponents.Input onChange={event => setPassword(event.target.value)} required type="password"/>
        </div>
        <div className="column">
          <FormComponents.Label>
            Validate password
          </FormComponents.Label>
          <FormComponents.Input onChange={event => setValidatePassword(event.target.value)} required type="password"/>
        </div>
        <FormComponents.Button>SIGN UP</FormComponents.Button>
      </form>
    </Frame>
  );
};

export default SignUp;
