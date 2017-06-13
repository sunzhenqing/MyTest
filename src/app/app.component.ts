import { Base } from './base';
import { Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { JsonObj } from './json-obj';

@Component({
    selector: 'my-heroes',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    heroes: Hero[];
    title = '1tour of heros';
    jjb: JSON;
    hero: Hero  = {
      id: 1,
      name: 'winnstorm'
    };
    selectHero: Hero;
    base: Base[];
    jsonobj: JsonObj;
    constructor(private heroService: HeroService) { };
    onSelect(h: Hero): void {
      this.selectHero = h;
    }
    getHeroes(): void {
        this.heroService.getHeroesSlowTime().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void {
        this.heroService.getHeroByNet().then(jsb => this.jsonobj = jsb);
        console.log(this.base);
        this.getHeroes();
    }
};
