import React, { useState } from 'react';
import styled from 'styled-components';
import * as FormComponents from './FormComponents';


const Frame = styled.form(props => ({
  padding: '1rem',

  '.column': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  'h2': {
    fontWeight: '700',
    fontSize: '1.7rem',
    textAlign: 'center',

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
      <h2>Auto Info</h2>
      <FormComponents.InfoSection>
        <div className="column">
          <FormComponents.Label>
            Purchase Price
          </FormComponents.Label>
          <FormComponents.Input required={true} onChange={event => setPrice(event.target.value)} type="number"/>
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
