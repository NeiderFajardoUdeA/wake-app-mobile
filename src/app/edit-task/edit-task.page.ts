import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonInput, IonItem, IonToggle, IonDatetime, IonCheckbox, IonTextarea } from '@ionic/angular/standalone';
import { CardComponent } from 'src/app/components/card/card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonInput, IonItem, IonToggle, IonDatetime, IonCheckbox, IonTextarea, CommonModule, FormsModule, CardComponent]
})
export class EditTaskPage implements OnInit {
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
