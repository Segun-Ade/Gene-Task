import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Link} from 'react-router-dom';
import MusicContent from './SchoolResult';
import {Consumer} from './Context';
import _ from 'lodash'


const Formstyle = styled.form`
margin-bottom: 3.8em;
bottom: 100%;
@media (max-width: 425px){
   top: 100%
   margin-top: -82px;
}
input #searchInput{
  @media(max-width:425px){
    position: relative;
    margin-left: 250px;
  }
}
.header__label{
    position: relative;
    width: 31rem;
    height: 4rem;
}
.label{
  font-weight: 350px;!important
  color: var(--color-brand-1);
}
 .header__search{
    width: 500px;
    height: 38px;
    margin-top: 2rem;
    padding: 0 4rem 0 1.4rem;
    border: solid thin #eee;
    border-radius: 5px;
    @media (max-width: 425px){
      position: relative;
      margin-left: 58%;
      width: 144px;
    }
    ::placeholder{
      color: var(--color-brand-1);
      font-size: 16px;
      font-style: var(--font-brand-1);
      font-weight: 100;
      @media(max-width: 425px){
         font-size: 13px;
         font-weight: 100;
      }
    }
 }
 .header__btn {
  position: absolute;
  top: 0rem;
  right: 1rem;
  width: 20px;
  height: 20px;
  background: transparent;
  border: 0;
  color: var(--color-brand-1);
  cursor: pointer;
  outline: none;
  svg{
    width: 1.1rem;
    height: 1.1rem;
    fill: var(--color-brand-1);
    outline: none;
     @media(max-width: 425px){
        width: 0.8rem;
     }
  }
   
 }

  @media(min-width: 720px) {
    input{
      width: 200px;
      margin: 0 5px;
    }
    button{
      width: auto;
      margin: 0 5px;
    }
  }
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
       searchResult: '',
      // state initialization
      ready: '',
      input: '',
      option: '',
      school: [],
   
    };
    this.addInput = this.addInput.bind(this);
    // this.Select = this.Select.bind(this);
    this.search = this.search.bind(this);

  }
  addInput(event) {
    this.setState({
      input: event.target.value,
      select: event.target.value,
    })
  }
  // Select(event){
  //   this.setState({
  //     select: event.target.value,
  //   })
  // }

 
 
  search(dispatch,event) {
    event.preventDefault();
    const {input, select} = this.state;
    this.setState({
      ready: 'loading',
      input: '',
      select: '',
    });
    // axios({
    //   mode: 'cors',	    
    //   method: 'get',
    //   url: `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${input}`,
    //   headers: {Authorization: `Bearer e9d874c859b7133d36df9b5bcd38512d`}
    // })
    axios({
      url:`https://api.schooldigger.com/v1.1/schools?st=${select}&q=${input}&perPage=20&appID=10d69119&appKey=a4ec10c2edf57fb8fbee10c07f28f757`
    })
  .then(res=>res.data.schoolList).then(data =>{
    dispatch({
       type: 'SEARCH',
       payload: data,
    })
 })
    .catch(err =>{
      console.log(err);
      this.setState({
        ready: 'error'
      })
    })

  }
  render() {
     return(
        <Consumer>
           {value =>{
              const {dispatch} = value;
              {/* _.orderBy(school, ['schoolName', 'rank'], ['asc', 'desc']); */}
              return (
                 <Formstyle onSubmit={this.search.bind(this, dispatch)}>
                 <label htmlFor="search" className="header__label">
                    <input onChange={this.addInput} type="search" id="searchInput" className="header__search" placeholder="Search" />
                       <button className="header__btn">
                       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.3 20.3L6 16.6c-1.2-1.5-2-3.5-2-5.6 0-5 4-9 9-9s9 4 9 9-4 9-9 9c-2.1 0-4.1-.7-5.6-2l-3.7 3.7c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4zM20 11c0-3.9-3.1-7-7-7s-7 3.1-7 7c0 1.9.8 3.7 2 4.9 1.3 1.3 3 2 4.9 2 4 .1 7.1-3 7.1-6.9z" fillRule="nonzero" /></svg>
                       </button>
                 </label>
                 <select onChange={this.addInput} id="select">
                   <option value="AL">AL</option>
                   <option value="AK">AK</option>
                   <option value="AZ">AZ</option>
                   <option value="AR">AR</option>
                   <option value="CA">CA</option>
                   <option value="CO">CO</option>
                   <option value="CT">CT</option>
                   <option value="DE">DE</option>
                   <option value="DC">DC</option>
                   <option value="FL">FL</option>
                   <option value="GA">GA</option>
                   <option value="HI">HI</option>
                   <option value="ID">ID</option>
                   <option value="IL">IL</option>
                   <option value="IN">IN</option>
                   <option value="IA">IA</option>
                   <option value="KS">KS</option>
                   <option value="KY">KY</option>
                   <option value="LA">LA</option>
                   <option value="ME">ME</option>
                   <option value="MD">MD</option>
                   <option value="MA">MA</option>
                   <option value="MI">MI</option>
                   <option value="MN">MN</option>
                   <option value="MS">MS</option>
                   <option value="MO">MO</option>
                   <option value="MT">MT</option>
                   <option value="NE">NE</option>
                   <option value="NV">NV</option>
                   <option value="NH">NH</option>
                   <option value="NJ">NJ</option>
                   <option value="NM">NM</option>
                   <option value="NY">NY</option>
                   <option value="NC">NC</option>
                   <option value="ND">ND</option>
                   <option value="OH">OH</option>
                   <option value="OK">OK</option>
                   <option value="OR">OR</option>
                   <option value="PA">PA</option>
                   <option value="RI">RI</option>
                   <option value="SC">SC</option>
                   <option value="SD">SD</option>
                   <option value="TN">TN</option>
                   <option value="TX">TX</option>
                   <option value="UT">UT</option>
                   <option value="VT">VT</option>
                   <option value="VA">VA</option>
                   <option value="WA">WA</option>
                   <option value="WV">WV</option>
                   <option value="WI">WI</option>
                   <option value="WY">WY</option>
                   <option value="PR">PR</option>
                 </select>
                 <button onClick={_.orderBy}>Sort by name</button>
                 </Formstyle>
              );
           }}
        </Consumer>
     )
  }
} 

export default Form;

