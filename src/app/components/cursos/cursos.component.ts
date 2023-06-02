import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/servicios/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class GamesComponent implements OnInit {
  lista:any=[];
  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.listarJuegos();
  }

  listarJuegos()
  {
    this.cursosService.getCursos().subscribe(
      res=>{this.lista=res},
      err=>console.log(err)
    );    
  }
}
