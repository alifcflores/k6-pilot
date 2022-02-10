import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 2000,
  duration: '1m',
};

export default function () {

  const res = http.get('https://dev.credpago.com/login.php',{
    cookies: {
      PHPSESSID: 'i1euo2a2gujn4ksnbeqi15dq37'
    }
  });
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}