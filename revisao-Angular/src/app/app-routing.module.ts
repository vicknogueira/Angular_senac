import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { LojaComponent } from './loja/loja.component';
import { PutProdutoComponent } from './put-produto/put-produto.component';
import { DeletarProdutoComponent } from './deletar-produto/deletar-produto.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},

  {path:'home', component: HomeComponent},

  {path:'contato', component: ContatoComponent},

  {path:'sobre', component:SobreComponent},

  {path:'loja', component:LojaComponent},

  {path:'put-produto', component:PutProdutoComponent},

  {path:'put-produto/:id', component:PutProdutoComponent},

  {path:'deletar-produto', component:DeletarProdutoComponent},

  {path:'deletar-produto/:id', component:DeletarProdutoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
