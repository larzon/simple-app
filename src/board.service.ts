import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from './boards';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient){}

  public getBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(`${this.apiServerUrl}/board/all`);
  }

  public addBoard(board: Board): Observable<Board> {
    return this.http.post<Board>(`${this.apiServerUrl}/board/add`, board);
  }
}
