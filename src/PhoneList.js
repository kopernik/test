import React from 'react';
import styles from './App.css';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    array: [],
    currentPage: 1
  }

  componentDidMount() {
    axios
      .get('http://dvislov.ru/test/phones.json')
      .then(({ data })=> {
        this.setState(
          { array: data.items }
        );
      })
      .catch((err)=> {})
  }

  render() {
    var pageEnd = this.state.currentPage * 16;
    var pageStart = pageEnd - 16
    return (

      <ul className={styles.numberList}>
        { this.state.array.slice(pageStart, pageEnd - 1).map(item =>
        <li className={styles.numberItem} key={item.phone}>
          <input id={item.phone} type="radio" name="phone"/>
          <label htmlFor={item.phone} className={styles.numberLabel} >{item.phone}</label>
        </li>
          )}
      </ul>
    )
  }
}