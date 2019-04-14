import React from 'react';
import styled from 'styled-components';
// import Rating from 'react-rating';

const SchoolResultStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 329px;
  background: #fffcfc80;
  color: var(--color-brand-1);
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.5);
  .top, .bottom{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 425px){
     height: 240px;
 }
  
  img{
    border-radius: 10px;
    width: 100%;
    height: 239px;
    object-fit: cover;
    @media (max-width: 425px){
      height: 145px;
  }
    @media (min-width: 1440px){
      height:270px;
   }
  }
  img:hover{
    opacity: .5;
    cursor: pointer;
  }

  div{
    padding: 0px 10px;
  }

  h3,h4, h5{
    margin: 5px 0;
    align-content: left;
  }

  h3{
    margin: 8px -8px;
    font-weight: 300;
    a:hover{
       text-decoration: underline;
    }
    @media (max-width: 425px){
      font-size: 13px;
  }
  }
 
`;

const SchoolResult = ({ children, image }) => (
  <SchoolResultStyle>
    {/* <img src={image || 'http://placehold.it/200'} alt="School result" /> */}
    
      {children}
    
  </SchoolResultStyle>
);

export default SchoolResult;
