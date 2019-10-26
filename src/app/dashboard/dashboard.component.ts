import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global-service/global.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private _opened: boolean = false;
  private isDocked = false;

  constructor(private global: GlobalService) { }

  ngOnInit() {
  }

  private _toggleOpened(): void {
    this.isDocked = !this.isDocked;
    this._opened = !this._opened;
  }

}
