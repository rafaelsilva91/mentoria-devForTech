import { Cliente } from './../../models/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  public cliente:Cliente = {
    id:1,
    nome: "Rafael Rodrigues",
    email: "rafael@email.com",
    senha:"123456",
    cep: "781500022",
    endereco: "Rua teste",
    numero: 22,
    bairro: "Primavera",
    cidade: "Várzea Grande",
    estado: "MT"

  } as Cliente

  public mostrarModelo(){
    console.log(this.cliente);
  }
}
