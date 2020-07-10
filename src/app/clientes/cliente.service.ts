import { Injectable } from '@angular/core';

import { Cliente } from './cliente';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import {Router} from '@angular/router';


@Injectable()
export class ClienteService {
  private urlEndPoint:string = 'http://localhost:9081/api/web/articulos/listar';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private router: Router) {

  }

getClientes(): Observable<Cliente[]>{
  return this.http.get(this.urlEndPoint).pipe(
    map(response => response as Cliente[])
  );
}







}
