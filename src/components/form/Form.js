import React from 'react';
import styled from 'styled-components';
import * as FormComponents from './FormComponents';


const Frame = styled.section(props => ({
  padding: '1rem',

  '.column': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },

  '.info-section': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    background: 'coral',
    padding: '2rem 1rem',
    margin: '1.5rem 0',
    backgroundColor: '#f7f7f7',
  },

  'h2': {
    fontWeight: '700',
    fontSize: '1.7rem',
    textAlign: 'center',
    
  },
}))

const Form = () => {

  return (
    <Frame>
      <h2>Auto Info</h2>
      <section className="info-section">
        <div className="column">
          <FormComponents.Label>
            Auto Purchase Price
          </FormComponents.Label>
          <FormComponents.Input type="number"/>
        </div>
        <div className="column">
          <FormComponents.Label>
            Auto Make
          </FormComponents.Label>
          <FormComponents.Input type="text"/>
        </div>
        <div className="column">
          <FormComponents.Label>
            Auto Model
          </FormComponents.Label>
          <FormComponents.Input type="text"/>
        </div>
      </section>

      <h2>User Info</h2>
      <section className="info-section">
        <div className="column">
          <FormComponents.Label>
            Estimated Yearly Income
          </FormComponents.Label>
          <FormComponents.Input type="number"/>
        </div>
        <div className="column">
          <FormComponents.Label>
            Estimated Credit Score
          </FormComponents.Label>
          <FormComponents.Input type="number"/>
        </div>
      </section>
    </Frame>
  );
};

export default Form;
