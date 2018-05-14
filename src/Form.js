import React, { Component } from 'react';
import styles from './App.css';
import { FormErrors } from './FormErrors';
import MaskInput from 'react-maskinput';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      formErrors: {email: ''},
      emailValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let phoneValid = this.state.phoneValid;
    let emailValid = this.state.emailValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      phoneValid: phoneValid,
      emailValid: emailValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
  render () {
    return (
      <form className={styles.form}>
          <div className={styles.formItems}>
            <div className={styles.formItem}>
              <label className={styles.formLabel}>Контактное лицо</label>
              <input type="text" className={styles.formInput} name="name"
                    value={this.state.name}
                    placeholder="Василий Пупкин"
                    onChange={this.handleUserInput}/>
            </div>
            <div className={styles.formItem}>
              <label className={styles.formLabel}>Организация</label>
              <input type="text" className={styles.formInput} placeholder="ACME corp."/>
            </div>
            <div className={styles.formItem}>
              <label className={styles.formLabel}>Электронная почта</label>
              <input type="email" className={styles.formInput} name="email"
                     value={this.state.email}
                     placeholder="pupkin@vroot.com"
                     onChange={this.handleUserInput}  />
            </div>
            <div className={styles.formItem}>
              <label className={styles.formLabel}>Телефон</label>
              <MaskInput
                  className={styles.formInput}
                  alwaysShowMask
                  placeholder="8422222222"
                  maskChar=''
                  mask='0000000000'        
              />
            </div>
          </div>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
          <button type="submit" className={styles.formButton} disabled={!this.state.formValid}>Отправить</button>

      </form>
  )
  }
}
export default Form;