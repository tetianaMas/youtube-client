import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'ytube-client-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export class DetailedInfoComponent implements OnInit {
  card$: Observable<Card | void> = new Observable();

  constructor(private route: ActivatedRoute, private router: Router, private service: CardService) {}

  ngOnInit() {
    this.card$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.service.getCard(params.get('id'))));
  }
}
