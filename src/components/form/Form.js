import React from 'react';
import styled from 'styled-components';
import * as FormComponents from './FormComponents';


const Frame = styled.section(props => ({
  background: 'red',
}))

const Form = () => {

  return (
    <Frame>
      <div>i am a form</div>
    </Frame>
  );
};

export default Form;
