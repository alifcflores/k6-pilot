import login from './plataforma/login.js';
import {group} from 'k6';

export const options = {
  // ext: {
  //   loadimpact: {
  //     projectID: 3570530,
  //   }
  // },
  stages: [
    { duration: '1m30s', target: 20 },
    { duration: '1m', target: 10 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
  group('Plataforma', ()=>{
    login();
  });

  group('Imobiliaria', ()=>{

  });
}