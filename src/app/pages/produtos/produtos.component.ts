import { ProdutosService } from './../../services/produtos/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'trust-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  public title;
 
  public planos: Array<any>;

  constructor(public produtosService: ProdutosService) { }

  ngOnInit(): void {

    this.produtosService.listarProdutos().subscribe(
      (result: Array<Produto>) => this.planos = result,
      (err) => console.log(err)
    );

    this.title = 'front-end-test-v2';

   
  }

  abrirPedido() {
    
  }
}
