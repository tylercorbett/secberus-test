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
    padding: '1rem',
    margin: '1.5rem 0',
  },
}))

const Form = () => {

  return (
    <Frame>
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
