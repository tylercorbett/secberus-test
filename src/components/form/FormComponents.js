import React from 'react';
import styled from 'styled-components';

export const Input = styled.input(props => ({
  padding: '.3rem',
  fontSize: '1.5rem',
  fontWeight: '700',
}))

export const Label = styled.label(props => ({
  margin: '.5rem 0',
  fontSize: '1.5rem',
}))

export const Button = styled.button(props => ({
  color: 'green',
  border: '2px solid green',
  borderRadius: '.2rem',
  display: 'block',
  margin: '.5rem auto',
  fontSize: '2rem',
  padding: '.2rem .8rem',
  transition: 'all .2s ease-in-out',
  background: 'transparent',

  '&:hover': {
    background: 'green',
    color: 'white',
    cursor: 'pointer',
  },
}))

export const InfoSection = styled.section`
  display: flex;
  alignItems: center;
  justifyContent: space-evenly;
  background: coral;
  padding: 2rem 1rem;
  margin: 1.5rem 0;
  backgroundColor: #f7f7f7;
  borderRadius: .2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
