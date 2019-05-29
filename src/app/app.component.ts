import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end-test-v2';

  public trustRodapeLinks = [
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

  public ForEmpresa = [
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

  public planos = [
    {
      title: 'SLIM',
      maquininha: '/assets/slim-2.png',
      totalPrice: '399,48',
      parcelas: '12',
      valorParcela: '9,88',
      description: 'Maquininha compacta que não precisa de celular com bateria de longa duração.',
    },
    {
      title: 'ULTRA',
      maquininha: '/assets/ultra-2.png',
      totalPrice: '479,88',
      parcelas: '12',
      valorParcela: '39,99',
      description: 'Equipamento portátil com tela touch, Impressora, bateria de longa duração e conexões 3G e WiFi.',
    }
  ];

}
