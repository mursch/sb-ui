//import {Response} from 'angular2/http';
//import {Observable} from 'rxjs/Observable';

import {BaseDto} from '../dto/BaseDto';
//import {OPTS_REQ_JSON} from '../utils/WebUtils';
import {HttpUtils} from '../utils/HttpUtils';


export abstract class BaseService<T extends BaseDto> {

  protected url: string;

  constructor(protected httpUtils: HttpUtils, version: string, resourceName: string) {
    this.url = `/api/${version}/${resourceName}`;
  }

  /*save(data: T): Observable<T> {
    const body = JSON.stringify(data);
    if (data._id) {
      return this.httpUtils.put(`${this.url}/${data._id}`, body, OPTS_REQ_JSON).map((res: Response) => res.json());
    }
    return this.httpUtils.post(this.url, body, OPTS_REQ_JSON).map((res: Response) => res.json());
  }

  delete(id: string): Observable<T> {
    return this.httpUtils.delete(`${this.url}/${id}`).map((res: Response) => res.json());
  }

  findById(id: string): Observable<T> {
    return this.httpUtils.get(`${this.url}/${id}`).map(res => res.json());
  }

  find(): Observable<T[]> {
    return this.httpUtils.get(`${this.url}/_find`).map((res: Response) => res.json());
  }*/

}
