import login from './plataforma/financeiro/login.js';
import {group} from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 2000 },
    { duration: '1m30s', target: 1000 },
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