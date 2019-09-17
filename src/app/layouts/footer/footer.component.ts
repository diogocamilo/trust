import { Component, OnInit } from '@angular/core';
import infos from 'src/app/constants/infos';

@Component({
  selector: 'trust-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public trustRodapeLinks;
  public ForEmpresa;
  public conteudos = infos.conteudos;
  public redes = infos.redes;

  constructor() { }

  ngOnInit() {
    this.trustRodapeLinks = [
      {
        text: 'Videos',
        url: ''
      },
      {
        text: 'Trust na Mídia',
        url: ''
      },
      {
        text: 'Assessoria de Imprensa',
        url: ''
      },
      {
        text: 'Política de Privacidade',
        url: ''
      }
    ];

    this.ForEmpresa = [
      {
        text: 'Crédito em Dobro',
        url: ''
      },
      {
        text: 'Conta de Pagamento Digital',
        url: ''
      },
      {
        text: 'Empréstimos',
        url: ''
      },
      {
        text: 'Antecipação de Duplicatas',
        url: ''
      }
    ];
  }

}
