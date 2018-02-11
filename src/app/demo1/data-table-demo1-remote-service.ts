import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataTableParams } from 'angular-4-data-table/src/index';
import 'rxjs/add/operator/toPromise';


const BASE_URL = 'https://demo7060061.mockable.io';
// const BASE_URL = './api/advisories/advisories.json';

function paramsToQueryString(params: DataTableParams) {
    const result = [];

    if (params.offset != null) {
        result.push(['_start', params.offset]);
    }
    if (params.limit != null) {
        result.push(['_limit', params.limit]);
    }
    if (params.sortBy != null) {
        result.push(['_sort', params.sortBy]);
    }
    if (params.sortAsc != null) {
        result.push(['_order', params.sortAsc ? 'ASC' : 'DESC']);
    }

    return result.map(param => param.join('=')).join('&');
}


@Injectable()
export class RemoteService {

    constructor (private http: Http) {}

    query(params: DataTableParams) {
        // return this.http.get(BASE_URL + '/people?' + paramsToQueryString(params)).toPromise()
        return this.http.get(BASE_URL).toPromise()
            .then((resp: Response) => ({
                items: resp.json(),
                count: Number(resp.headers.get('X-Total-Count'))
            }));
    }
}
