import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  readonly apiUrl: string = ""

  constructor(private http: HttpClient) { 
    this.apiUrl = `http://localhost:5102`;
  }

  AskToIA(message: string): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/api/ai?message=${encodeURIComponent(message)}`)
  }
} 
