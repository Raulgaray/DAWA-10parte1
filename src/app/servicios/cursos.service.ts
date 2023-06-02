import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  url='http://localhost:3000/cursos/'
  constructor(private http: HttpClient) { }

  getCursos():Observable<any>
  {
    return this.http.get(this.url);
  }

  getOneCurso(id: string):Observable<any>
  {
    return this.http.get(this.url+'/'+id);
  }

  saveCurso(curso: Curso):Observable<any>
  {
    return this.http.post(this.url, curso);
  }

  editCurso(id:string, tarea: Curso):Observable<any>
  {
    return this.http.put(this.url+'/'+id, tarea);
  }

  deleteCurso(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/'+id);
  }
}
export interface Curso{
  id_curso:string;
  nombre:string;
  descripcion:string;
}

