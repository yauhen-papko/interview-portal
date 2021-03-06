/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse, 
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

import { DisciplineDTO } from '../models/discipline';
import { DisciplineWithDisciplineHeadsDTO } from '../models/disciplineWithDisciplineHeadsDTO';


/**
 * Discipline Controller
 */
 @Injectable()
export class DisciplineControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
   findAllUsingGETResponse(): Observable<HttpResponse<DisciplineDTO[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/discipline`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: DisciplineDTO[] = null;
        _body = _resp.body as DisciplineDTO[]
        return _resp.clone({body: _body}) as HttpResponse<DisciplineDTO[]>;
      })
    );
  }

  /**
   * @return OK
   */
   findAllUsingGET(): Observable<DisciplineDTO[]> {
    return this.findAllUsingGETResponse().pipe(
      map(_r => _r.body)
    );
  }

  findSubItemsGETResponse(id: number): Observable<HttpResponse<DisciplineDTO[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/discipline/parents/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: DisciplineDTO[] = null;
        _body = _resp.body as DisciplineDTO[]
        return _resp.clone({body: _body}) as HttpResponse<DisciplineDTO[]>;
      })
    );
  }

  /**
   * @return OK
   */
   findSubItemsUsingGET(id: number): Observable<DisciplineDTO[]> {
    return this.findSubItemsGETResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  findDisciplinesForUserGETResponse(): Observable<HttpResponse<DisciplineDTO[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/discipline/user`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: DisciplineDTO[] = null;
        _body = _resp.body as DisciplineDTO[]
        return _resp.clone({body: _body}) as HttpResponse<DisciplineDTO[]>;
      })
    );
  }

  findDisciplinesForUserUsingGET(): Observable<DisciplineDTO[]> {
    return this.findDisciplinesForUserGETResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param discipline discipline
   */
   saveUsingPOSTResponse(discipline: DisciplineDTO): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = discipline;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/discipline`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param discipline discipline
   */
   saveUsingPOST(discipline: DisciplineDTO): Observable<void> {
    return this.saveUsingPOSTResponse(discipline).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id id
   * @return OK
   */
   findByIdUsingGETResponse(id: number): Observable<HttpResponse<DisciplineWithDisciplineHeadsDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/discipline/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: DisciplineWithDisciplineHeadsDTO = null;
        _body = _resp.body as DisciplineWithDisciplineHeadsDTO
        return _resp.clone({body: _body}) as HttpResponse<DisciplineWithDisciplineHeadsDTO>;
      })
    );
  }

  /**
   * @param id id
   * @return OK
   */
   findByIdUsingGET(id: number): Observable<DisciplineWithDisciplineHeadsDTO> {
    return this.findByIdUsingGETResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id id
   */
  deleteDisciplineUsingDELETEResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/discipline/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param id id
   */
   deleteDisciplineUsingDELETE(id: number): Observable<void> {
    return this.deleteDisciplineUsingDELETEResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

export module DisciplineControllerService {
}
