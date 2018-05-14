import React, { Component } from 'react';
import styles from './App.css';
import PhoneList from './PhoneList.js'
import SearchBar from './components/SearchBar/SearchBar.js'
import Pagination from './components/Pagination/Pagination.js'
import Form from './Form.js';

class App extends Component {

  render() {
    return (

      <div className={styles.app}>
        <div className={styles.phoneForm}>
          <div className={styles.phoneLeft}>
            <div className={styles.title}>Выберите желаемый номер телефона</div>
            <SearchBar />
            <PhoneList />
            <Pagination />
          </div>
          <Form />
        </div>

      </div>
    );
  }
}

export default App;