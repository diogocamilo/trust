import { Component, OnInit, Input, Output } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'trust-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent implements OnInit {

  public planos: Array<any>;
  @Input() produto: Produto;
  // @Output() pedir = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

}
