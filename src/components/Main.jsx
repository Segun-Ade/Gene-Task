import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Rating from 'react-star-rating-lite';
import { Wrapper, Box1, Box2 } from './Grid';
import MusicBg from '../../assets/music-bg.jpeg';
import SchBg from '../../assets/sch.jpg';
import SchoolResult from './SchoolResult';
import Footer from './Footer';
import Container from './Container';
import Form from './Form';
import Loader from './Loader';
import {Consumer} from './Context';
import _ from 'lodash'


const MainStyle = styled.div`
  header, footer{
    text-align: center;
  }
  main{
   overflow: auto;
   padding-bottom: 100px;
  }
`;

const Header = styled.div`
  padding:20px 5px;
  background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${SchBg});
  background-size: cover;
  background-position: center;
  color: #fff;
  display: grid;
  place-items: center;
  @media (max-width: 425px){
     grid-column: 1/span 3;
     grid-row: 1/span 2;
}
 
  @media (min-width: 768px){
     padding: 50px 20px;
  }
  @media (min-width: 1024px){
   padding: 70px 20px;
   clip-path: polygon(0 0,610% -40%,51% 90%,0 80%);
}

  }
`;

class Main extends Component {


  render() {
    // const { school, ready, heading } = this.state;
    return (
   <Consumer>
     {value =>{ 
        const {school, ready, heading} = value;
        console.log(value);
        
       const Sorting = sort =>{_.orderBy(school, ['schoolName'], ['asc', 'desc']);}
     return(
     <MainStyle>
        <main>
          <Container>
            <Wrapper>
            <div className="top">
                <Header>
                  <h3>School Search</h3>
                  <h5><p>The school search platform</p></h5>
                  <Form />
                </Header>
            </div>
            <div className="right">
                <p>{heading}</p>
              {school.length ? '' : <Loader />}
              {/* {ready === 'loading' ? 'Loading...' : ''} */}
              <Box2>
              {school.map((school) =>(
                  <SchoolResult key={school.schoolid}>
                    <div className="top">
                      <h3 className="school-name">School name: {school.schoolName}</h3>
                      {/* {school.rankHistory.map(rankHistory =>
                      <h3 className="ranking">Ranking:{rankHistory.rank}</h3>
                      )} */}
                      {/* <h3 className="ranking" key={school.rankHistory}>Ranking{school.rankHistory}</h3> */}
                    </div>
                    <div className="bottom">
                      {/* <h3 className="district">District:{school.district.districtName}</h3> */}
                      <h3 className="ranking-range">Rank range: {school.rankMovement}</h3>
                    </div>
                    {/* <button>Order by name</button> */}
                  </SchoolResult>
              ))}
              </Box2>
            </div>
            </Wrapper>
          </Container>
        </main>
        
     </MainStyle>);
   }}
   </Consumer>
    );
  }
} 

export default Main;

