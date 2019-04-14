import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${'' /* grid-gap: 45px; */}
  @media (min-width: 768px){
     grid-gap: 15px
  }
  @media (max-width: 425px){
   display: inline;
}
  .top{
    ${'' /* border-right: solid thin #eee; */}
    @media (max-width: 425px){
       display: grid;
       grid-template-columns: 140px 1fr 1fr;
       grid-template-rows: 25% 100px 65px;
    }
  }
  .right p{
    font-style: var(--font-brand-1);
    font-size: 22px;
    color: var(--color-brand-3);
    font-weight: 100;
    @media(max-width: 425px){
      font-size: 18px;
      margin-inline-start: 15px;
    }
  }
 .top h3{
    font-style: var(--font-brand-2);
    font-weight: 100;
    font-size: 30px;
    bottom: 100%;
    padding-bottom: 0px;
    left: 100%;
  }
  .top img{
    width: 45px;
    height: 45px;
    left: 100%;
    margin-left: 38px;
    bottom: 100%;
    margin-bottom: -84px;
  }
  
  h5{
    line-height: 0px;
    top: 100%;
    padding-top: 0px;
    left: 100%;
    margin-top: -4px;
    p{
      font-size: 16px;
      font-weight: 10;
      font-style: var(--font-brand-1);
    }
  }
  `;
  
  
export const Box2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 20px;
  padding: 30px 50px;
  ${'' /* top: 100%;
  right: 100%;
  padding-right: 20px; */}
  @media(max-width: 425px){
   padding: 25px;
   margin: 0;
 }
@media (max-width: 768px){
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 15px;
   margin-right: 5px;
   padding-right: 10px;
}
`;
