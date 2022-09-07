import { Component, OnInit } from '@angular/core';
import { Goal } from '../models/goal';
import { GoalService } from '../services/goal.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {FilterService} from 'primeng/api';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  loading :boolean = true;
  totalRecords :number = 0;
  goalDialog: boolean;

  goals: Array<Goal>;

  selectedGoals: Array<Goal>;

  statuses: any[];

  constructor(private service: GoalService) {
    this.goals = [];
    this.selectedGoals = [];
    this.statuses = [
      {label: 'INCOMPLETE', value: 'incomplete'},
      {label: 'COMPLETE', value: 'complete'},
      {label: 'EXPIRED', value: 'expired'}
    ];
    this.goalDialog = false;
   }

  ngOnInit(): void {
    this.goals.push(new Goal())
    this.service.getAll().subscribe(resp => this.goals = resp)
    console.log(this.goals);

    this.loading = false;
    this.totalRecords = this.goals.length;
  }

  newGoal() {

  }

  deleteSelectedGoals(){

  }
}
