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
}))

const Form = () => {

  return (
    <Frame>
      <div className="column">
        <FormComponents.Label>
          Auto Purchase Price
        </FormComponents.Label>
        <FormComponents.Input type="number"/>
      </div>
    </Frame>
  );
};

export default Form;
