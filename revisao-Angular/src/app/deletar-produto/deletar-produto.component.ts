import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.css']
})
export class DeletarProdutoComponent implements OnInit {

  constructor(private produtosService: ProdutosService, private route:ActivatedRoute, private router: Router) { }

  produto: Produto = new Produto
  delOk:boolean = false
  ngOnInit(){
    let id:number = this.route.snapshot.params['id']
    this.findById(id)

  }
  findById(id:number){
    this.produtosService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
    }, err =>{
      console.log(`Erro na busca do id cod: ${err.status}`)
    }
    )
  }

  btnSim(){
    this.produtosService.deleteProduto(this.produto.id).subscribe(()=>{
      this.delOk = true
      this.router.navigate(['/loja'])
      localStorage.setItem("delOk", this.delOk.toString())
    })
  }
  btnNao(){
    this.router.navigate(['/loja'])
  }

}
