import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { Card } from 'src/app/shared/models/card.model';
import { YoutubeService } from 'src/app/core/services/youtube.service';

@Component({
  selector: 'ytube-client-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export class DetailedInfoComponent implements OnInit {
  card: Card | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private service: YoutubeService) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(map((params: ParamMap) => this.service.getCardById(params.get('id') || '')))
      .subscribe((card) => (this.card = card));
  }
}
