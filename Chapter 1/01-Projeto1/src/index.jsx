import {render} from 'react-dom';
import {App} from './App' //importação de um arquivo JSX já configurado através do Webpack

render(
  <App/>
  ,document.getElementById('root')
  )