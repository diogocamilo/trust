import { FooterComponent } from './../../layouts/footer/footer.component';
import { HeaderComponent } from './../../layouts/header/header.component';
import { ProdutosRoutingModule } from './produtos-routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { HttpClientModule } from '@angular/common/http';
import { CardProdutoComponent } from 'src/app/layouts/card-produto/card-produto.component';

@NgModule({
  declarations: [
    ProdutosComponent,
    HeaderComponent,
    FooterComponent,
    CardProdutoComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
