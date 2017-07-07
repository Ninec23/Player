import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Player }        from './player';
import { PlayerService } from './player.service';

@Component({
  selector: 'player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: [ './player-detail.component.css' ]
})
export class PlayerDetailComponent implements OnInit {
  player: Player;

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.playerService.getPlayer(+params.get('id')))
      .subscribe(player => this.player = player);
  }

  save(): void {
    this.playerService.update(this.player)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
