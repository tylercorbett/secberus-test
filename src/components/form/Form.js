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
      <FormComponents.InfoSection>
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
      </FormComponents.InfoSection>

      <h2>User Info</h2>
      <FormComponents.InfoSection>
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
      </FormComponents.InfoSection>

      <FormComponents.Button>SUBMIT</FormComponents.Button>
    </Frame>
  );
};

export default Form;
