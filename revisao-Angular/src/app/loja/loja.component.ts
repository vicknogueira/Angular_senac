import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutosService } from '../service/produto.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  listaProdutos: Produto[]
  produto: Produto = new Produto
  alerta:boolean = false

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.findAllProdutos()
    let item:string = localStorage.getItem('delOk')
    window.scroll(0,0)
    
    if(item == "true"){
      this.alerta = true
      localStorage.clear()
      setTimeout(()=>{
        location.assign('/loja')
      }, 3000)
    }
  }

  findAllProdutos(){
    this.produtosService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp;
    });
  }

  publicar(){  
    this.produtosService.postProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp;
      location.assign('/loja')
    });
  }
}
