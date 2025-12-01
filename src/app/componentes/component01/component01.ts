import { Component, OnInit } from '@angular/core';
import { Service01 } from '../../servicios/service01';

@Component({
  selector: 'app-component01',
  imports: [],
  templateUrl: './component01.html',
  styleUrl: './component01.css',
})
export class Component01 implements OnInit {

  public usuarios: any[] = [];

  constructor(private service01: Service01) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  public getUsuarios(): void {
    this.service01.getUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }
}
