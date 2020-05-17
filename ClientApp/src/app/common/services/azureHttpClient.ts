import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AzureHttpClient {

    constructor(private http: HttpClient) { }

    get(url: string, apiKey: string): any {
        const headers = new HttpHeaders();
        headers.append('Ocp-Apim-Subscription-Key', apiKey);
        return this.http.get(url, {
            headers: headers
        });
    }

    post(url: string, apiKey: string): any {
        const headers = new HttpHeaders();
        headers.append('Ocp-Apim-Subscription-Key', apiKey);
        return this.http.get(url, {
            headers: headers
        });
    }

}
