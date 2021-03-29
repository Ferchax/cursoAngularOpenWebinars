import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  //public listadoEntradas: Entrada[];
  public listadoEntradas: any;

  constructor(private entradaService: EntradaService) { 
    /*this.listadoEntradas = [
      {
        titulo: "Introducción a Angular",
        resumen: "En esta lección realizaremos una pequeña introducción al mundo de desarrollo con Angular"
      },
      {
        titulo: "Typescript como lenguaje para Angular",
        resumen: "Breve recorrido por el lenguaje de Typescript como base para desarrollar en Angular"
      },
      {
        titulo: "Componentes en Angular",
        resumen: "Aprenderemos a usar los componentes en Angular y el porqué de su importancia"
      }
    ];*/
  }

  ngOnInit(): void {
    this.recuperarEntradas();
  }

  private recuperarEntradas(): void {
    this.entradaService.recuperarEntradas().subscribe(
      (data) => {
        this.listadoEntradas = data;
      },
      (error) => {

      },
      () => {

      }
    )
  }

  public mostrarTitulo(titulo: string): void {
    alert(`Entrada seleccionada: ${ titulo }.`);
  }
}
