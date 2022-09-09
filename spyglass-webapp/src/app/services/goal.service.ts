import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Goal } from '../models/goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  baseUrl: string = 'http://localhost:8080/goals'

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  saveGoal(goal: Goal): Observable<any> {
    return this.http.post(this.baseUrl, goal);
  }

  updateGoal(goal: Goal): Observable<any> {
    return this.http.put(`${this.baseUrl}/${goal.id}`, goal);
  }

  deleteGoal(id: number): Observable<any> {
    console.log(`${this.baseUrl}/${id}`)
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}

