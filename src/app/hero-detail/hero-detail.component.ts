import 'rxjs/add/operator/switchMap';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
    @Input() hero: Hero;
    constructor(
        private heroSer: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ){}
    ngOnInit(): void {
        this.route.params.switchMap((params: Params) => this.heroSer.getHeroById(+params['id']))
        .subscribe(hero => this.hero = hero);
        return;
    }
    goBack(): void{
        this.location.back()
    }
}
