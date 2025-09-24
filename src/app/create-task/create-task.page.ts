import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonInput, IonItem, IonToggle, IonDatetime, IonCheckbox, IonTextarea } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
  standalone: true,
  imports: [IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    IonItem, 
    IonLabel, 
    IonToggle, 
    IonInput, 
    IonDatetime, 
    IonCheckbox, 
    IonButton, 
    IonTextarea
  ]
})
export class CreateTaskPage implements OnInit {

  task = {
    name: '',
    startTime: '07:00',
    description: '',
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToTasksPage() {
    this.router.navigate(['/tasks']);
  }
}
