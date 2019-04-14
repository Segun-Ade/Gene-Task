//this is my context component, this is where I manipulate state
import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
   switch(action.type) {
      case 'SEARCH':
         return {
            ...state,
            ready: 'loaded',
            school: action.payload,
            heading: 'Search Results'
         };
         default:
            return state;
   }
}

export class Provider extends Component {
   state = {
      school: [],
      ready: 'initial',
      heading: 'School Digger Recommends',
      dispatch: action => this.setState(state => reducer(state, action))
   }
   componentDidMount() {
      this.setState({
        ready: 'loading',
      });

      axios({
        mode: 'cors',	    
        method: 'get',	    
        url: 'https://api.schooldigger.com/v1.1/schools?st=CA&q=lincol&appID=e770467e&appKey=ebae6b72365941495ce25dae7c101f98',
      //   headers: ,
      })
      // 
      .then(res=>res.data.schoolList).then(data =>{
         this.setState({
            ready: 'loaded',
            school: data,
         })
      }
   ) 
 }
   render() {
      return (
         <Context.Provider value={this.state}>
            {this.props.children}
         </Context.Provider>
      )
   }
}

export const Consumer = Context.Consumer;
