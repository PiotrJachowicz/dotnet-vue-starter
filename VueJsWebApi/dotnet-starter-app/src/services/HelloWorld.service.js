import { Observable, of } from 'rxjs';

export default class HelloWorldService {
  callWebApi() {
    return of('hello world test');
  }
}
