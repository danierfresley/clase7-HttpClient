import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service01 {

  private url: string = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  /**
   * getUsuarios:
   * Realiza una petición GET para obtener una lista de usuarios desde la API.
   * @returns Observable<any[]> -> Observable que emite un arreglo de usuarios.
   */
  public getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  /**
   * crearUsuario:
   * Realiza una petición POST para crear un nuevo usuario en la API.
   * @param user -> Objeto que contiene los datos del usuario a crear.
   * @returns Observable<any> -> Observable que emite el usuario creado.
   */
  public crearUsuario(user: any): Observable<any> {
    return this.http.post<any>(this.url, user);
  }

}
