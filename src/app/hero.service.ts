import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Jsonp, Headers, RequestOptions } from '@angular/http';

import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Base } from './base';
import { JsonObj } from './json-obj';

@Injectable()
export class HeroService {
    private uri = "http://cs1.nongchangyun.cn/rest/1.0/webgis?method=init_map_first&field=%7B%27enterprise_info_id%27%3A85%2C%27base_id%27%3A-1%7D";

    b: Base;

    constructor(
        private jsonp: Jsonp
    ) { }

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    };
    getHeroesSlowTime(): Promise<Hero[]> {
        return new Promise(resolve => { setTimeout(() => resolve(this.getHeroes()), 100); });
    }
    getHeroById(id: number): Promise<Hero> {
        return this.getHeroes().then(heros => heros.find(hero => hero.id === id));
    }
    getHeroByNet(): Promise<JsonObj> {
//        return this.http.get(this.uri)
//               .toPromise()
//               .then(response => response.json().data as Hero[])
//               .catch(this.handleError);
         const params = new URLSearchParams();
            params.set('method', 'resumeedit.whole.data');
            params.set("field","{}")
            params.set('format', 'json');
            params.set('callback', 'JSONP_CALLBACK');
        //JSON.stringify({'method': 'resumeedit.whole.data','field': 'aabbcc','format': 'json','callback': 'JSONP_CALLBACK'}
         return this.jsonp.get(
             'http://192.168.21.14:8080/rest/1.0/resumeedit?'+params        ).toPromise().then(response => {
            var a=  response.json();
            console.log(a.invoke_result);
            return a;
        });
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
};
