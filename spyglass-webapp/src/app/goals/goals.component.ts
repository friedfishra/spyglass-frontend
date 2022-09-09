import { Component, OnChanges, OnInit } from '@angular/core';
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
  displayModal :boolean = false;
  isCloseable :boolean= false;
  loading :boolean = true;
  totalRecords :number = 0;
  goalDialog: boolean;
  displayEditModal: boolean;
  selectedGoal: Goal;
  amountToAdd: number;
  percentage: number;

  goals: Array<Goal>;
  newGoal: Goal;
  selectedGoals: Array<Goal>;

  statuses: any[];

  constructor(private service: GoalService, private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.newGoal = new Goal();
    this.goals = [];
    this.selectedGoals = [];
    this.statuses = [
      {label: 'INCOMPLETE', value: 'incomplete'},
      {label: 'COMPLETE', value: 'complete'},
      {label: 'EXPIRED', value: 'expired'}
    ];
    this.goalDialog = false;
    this.displayEditModal = false;
    this.selectedGoal = new Goal();
    this.amountToAdd = 0;
    this.percentage = 0;
    
   }

  ngOnInit(): void {
    
    this.service.getAll().subscribe(resp => this.goals = resp)
    console.log(this.goals);

    this.loading = false;
    this.totalRecords = this.goals.length;

    this.goals.forEach(element => {
      if(element.currentAmount >= element.targetAmount){
        element.status = "Complete"
      } else if (this.selectedGoal.currentAmount < this.selectedGoal.targetAmount) {
        this.selectedGoal.status = 'Incomplete'
      }
    })
  }


  clickedNew() {
    this.displayModal = true;
    this.isCloseable = true;
  }

  createGoal() {
    
    this.displayModal = false;
    this.service.saveGoal(this.newGoal).subscribe(resp => this.newGoal = resp);   //set the id from the returned goal 
    this.goals.unshift(this.newGoal);
    this.newGoal = new Goal();
  }

  deleteSelectedGoals(){
    this.goals = this.goals.filter(val => !this.selectedGoals.includes(val));
    console.log(this.selectedGoals)
    
    this.selectedGoals.forEach(element => {
      this.service.deleteGoal(element.id).subscribe();
      
      console.log(element.id)
    });
  }

  editGoal(goal: Goal) {
    this.selectedGoal = goal;
    this.displayEditModal = true;
  }



  deleteGoal(goal: Goal) {
    this.goals = this.goals.filter(() => !this.goals.includes(goal));
    this.service.deleteGoal(goal.id).subscribe();
    
    
  }

  updateAmountSaved(){
    
    this.selectedGoal.currentAmount = this.selectedGoal.currentAmount + this.amountToAdd;
    this.amountToAdd = 0;

  }

  

  updateGoal(goal: Goal) {
    this.service.updateGoal(goal).subscribe(resp => this.selectedGoal = resp);
    if(this.selectedGoal.currentAmount >= this.selectedGoal.targetAmount){
      this.selectedGoal.status = 'Complete'
    } else if (this.selectedGoal.currentAmount < this.selectedGoal.targetAmount) {
      this.selectedGoal.status = 'Incomplete'
    }
    this.percentage = this.selectedGoal.currentAmount/this.selectedGoal.targetAmount * 100;
    this.displayEditModal = false;
  }
}
