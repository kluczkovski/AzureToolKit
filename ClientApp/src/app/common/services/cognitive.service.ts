import { Injectable } from '@angular/core';
import { AzureHttpClient } from './azureHttpClient';
import { Observable, throwError } from 'rxjs';
import { BingSearchResponse } from '../models/bingSearchResponse';



@Injectable()
export class CognitiveService {

    bingSearchAPIKey = '92ea6b29955b4f899a82953f07a05ad7';

    constructor(private http: AzureHttpClient) {}

    searchImages(searchTearm: string): Observable<any> {
        return this.http
            .get(
                'https://imagesearchek.cognitiveservices.azure.com/bing/v7.0/images/search?q=${searchTerm}',
                this.bingSearchAPIKey)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
         return Promise.reject(error.message || error);
    }
}
