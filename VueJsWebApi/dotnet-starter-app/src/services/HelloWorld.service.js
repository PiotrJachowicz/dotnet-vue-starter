import { Observable } from 'rxjs';
import http from '../common/http-common';

export default {
  callWebApi() {
    return Observable.create((observer) => {
      http
        .get('helloworld')
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  },
};
