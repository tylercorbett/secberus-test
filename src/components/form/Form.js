import React, { useState } from 'react';
import styled from 'styled-components';
import * as FormComponents from './FormComponents';


const Frame = styled.section(props => ({
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
  



  return (
    <Frame>
      <h2>Auto Info</h2>
      <FormComponents.InfoSection>
        <div className="column">
          <FormComponents.Label>
            Auto Purchase Price
          </FormComponents.Label>
          <FormComponents.Input onChange={event => setPrice(event.target.value)} type="number"/>
        </div>
        <div className="column">
          <FormComponents.Label>
            Auto Make
          </FormComponents.Label>
          <FormComponents.Input onChange={event => setMake(event.target.value)} type="text"/>
        </div>
        <div className="column">
          <FormComponents.Label>
            Auto Model
          </FormComponents.Label>
          <FormComponents.Input onChange={event => setModel(event.target.value)} type="text"/>
        </div>
      </FormComponents.InfoSection>

      <h2>User Info</h2>
      <FormComponents.InfoSection>
        <div className="column">
          <FormComponents.Label>
            Estimated Yearly Income
          </FormComponents.Label>
          <FormComponents.Input onChange={event => setIncome(event.target.value)} type="number"/>
        </div>
        <div className="column">
          <FormComponents.Label>
            Estimated Credit Score
          </FormComponents.Label>
          <FormComponents.Input min="300" max="850" onChange={event => setCredit(event.target.value)} type="number"/>
        </div>
      </FormComponents.InfoSection>

      <FormComponents.Button
        onClick={() => onSubmit({
          price,
          make,
          model,
          income,
          credit
        })}
      >
        SUBMIT
      </FormComponents.Button>
    </Frame>
  );
};

export default Form;
