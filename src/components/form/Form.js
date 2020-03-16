import React, { useState } from 'react';
import styled from 'styled-components';
import * as FormComponents from './FormComponents';


const Frame = styled.form(props => ({
  padding: '1rem',

  'h2': {
    fontWeight: '700',
    fontSize: '1.7rem',
    textAlign: 'center',

  },

  '.marketing': {
    marginBottom: '3rem',

    'img': {
      width: '20rem',
    },

    'p': {
      margin: '1rem 2rem',
      width: '50%',
      textAlign: 'center',
    },
  },
}))

const Form = ({ onSubmit }) => {
  const [price, setPrice] = useState(null);
  const [make, setMake] = useState(null);
  const [model, setModel] = useState(null);
  const [income, setIncome] = useState(null);
  const [credit, setCredit] = useState(null);
  

  const handleFormSubmit = e => {
    e.preventDefault();

    onSubmit({
      price,
      make,
      model,
      income,
      credit
    })
  }

  return (
    <Frame
      onSubmit={e => handleFormSubmit(e)}
    >

      <div className="marketing column">
        <img src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/pass/Transpo_G70_TA-518126.jpg" alt="Car" />
        {/* Marketing copy can go here */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <h2>Auto Info</h2>
      <FormComponents.InfoSection>
        <div className="column">
          <FormComponents.Label>
            Purchase Price
          </FormComponents.Label>
          <FormComponents.Input autoFocus required={true} onChange={event => setPrice(event.target.value)} type="number"/>
        </div>
        <div className="column">
          <FormComponents.Label>
            Make
          </FormComponents.Label>
          <FormComponents.Input required onChange={event => setMake(event.target.value)} type="text"/>
        </div>
        <div className="column">
          <FormComponents.Label>
            Model
          </FormComponents.Label>
          <FormComponents.Input required onChange={event => setModel(event.target.value)} type="text"/>
        </div>
      </FormComponents.InfoSection>

      <h2>User Info</h2>
      <FormComponents.InfoSection>
        <div className="column">
          <FormComponents.Label>
            Estimated Yearly Income
          </FormComponents.Label>
          <FormComponents.Input required onChange={event => setIncome(event.target.value)} type="number"/>
        </div>
        <div className="column">
          <FormComponents.Label>
            Estimated Credit Score
          </FormComponents.Label>
          <FormComponents.Input min="300" max="850" required onChange={event => setCredit(event.target.value)} type="number"/>
        </div>
      </FormComponents.InfoSection>

      <FormComponents.Button
        type="submit"
      >
        SUBMIT
      </FormComponents.Button>
    </Frame>
  );
};

export default Form;
