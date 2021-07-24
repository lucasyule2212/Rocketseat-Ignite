import React from 'react';
import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss'

// import { Container } from './styles';

function SignIn()  {
  var userIsLogged=true;
  return userIsLogged?(
  <button
    type='button'
    className={styles.signInButton}
    >
      <FaGithub color='#04d361'/>
      Lucas Yule
      <FiX color="#737383" className={styles.closeIcon} />
    </button>
    ):(
      <button
      type='button'
      className={styles.signInButton}
      >
        <FaGithub color='#eba417'/>
        Sign in with GitHub
      </button>
    )

}

export default SignIn;