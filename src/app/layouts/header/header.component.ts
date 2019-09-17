import { Component, OnInit } from '@angular/core';
import infos from 'src/app/constants/infos';

@Component({
  selector: 'trust-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  info = infos;

  constructor() { }

}
