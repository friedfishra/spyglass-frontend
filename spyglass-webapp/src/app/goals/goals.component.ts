import { Component, OnInit } from '@angular/core';
import { Goal } from '../models/goal';
import { GoalService } from '../services/goal.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  goals: Array<Goal>;

  constructor(private service: GoalService) {
    this.goals = [];
    
   }

  ngOnInit(): void {
  }

}
