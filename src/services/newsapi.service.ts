// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { NewsApiGlobal } from '../models/newsapi-global.model';

@Injectable()
export class NewsApiService {

    private baseUrl: string = 'https://newsapi.org/v1/';
    private source: string = 'new-scientist';
    private apiKey: string = '5ca680d0a49244fd86c4e32ea1d007df';

    constructor(private http: Http) {

	}

    public getArticles(): Promise<NewsApiGlobal> {
		const url = `${this.baseUrl}articles?source=${this.source}&sortBy=top&apiKey=${this.apiKey}`;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as NewsApiGlobal)
        .catch(error => console.log('Une erreur est survenue : ' + error))
    }

}
