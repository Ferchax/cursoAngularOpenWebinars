import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public miToken: number;
  public nombreUsuario: string | null;

  constructor() { 
    this.miToken = 0;
    this.nombreUsuario = "";
  }

  ngOnInit(): void {

    if(localStorage.getItem('tokenUsuario')) {
      this.miToken = +localStorage.getItem('tokenUsuario')!;
    }

    if(localStorage.getItem('nombreUsuario')) {
      this.nombreUsuario = localStorage.getItem('nombreUsuario');
    }
  }

  public logout(): void {
    if(localStorage.getItem('tokenUsuario')) {
      localStorage.removeItem('tokenUsuario');
    }
  }
}
