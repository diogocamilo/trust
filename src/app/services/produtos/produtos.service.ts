import { Injectable,  } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { catchError } from 'rxjs/operators';
import { Cacheable } from 'ngx-cacheable';



@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(public http: HttpClient) { }

  @Cacheable()
  listarProdutos() {
    return this.http.get(environment.BASE_URL).pipe(catchError(this.tratarErro));
  }

  tratarErro(error: HttpErrorResponse) {
    let mensagemErro = '';

    if (error.error instanceof ErrorEvent) {
      // erro aplicação
      mensagemErro = `Error: ${error.error.message}`;
    } else {
      // erro servidor
      switch (error.status) {
        case 403:
          mensagemErro = 'Você não possui permissão para esse conteúdo.';
          break;
        case 404:
          mensagemErro = 'Não foi possível encontrar os dados. Tente novamente mais tarde!';
          break;
        case 500:
          mensagemErro = 'Não foi possível encontrar os dados. Tente novamente mais tarde!';
          break;
        default:
          mensagemErro = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }

    }

    return throwError(mensagemErro);
  }
}
