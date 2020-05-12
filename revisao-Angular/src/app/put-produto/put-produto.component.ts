import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produto.service';
import { Produto } from '../model/Produto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-put-produto',
  templateUrl: './put-produto.component.html',
  styleUrls: ['./put-produto.component.css']
})
export class PutProdutoComponent implements OnInit {

  produto: Produto = new Produto
  constructor(private produtosService: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() :void{
    let id =this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id:number){
    this.produtosService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
    })
  }
  salvar(){
    this.produtosService.putProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      this.router.navigate(['/loja'])
    })
  }
}
