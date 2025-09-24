import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonToggle, IonInput, IonDatetime, IonCheckbox, IonButton, IonTextarea } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CardComponent } from '../components/card/card.component';


@Component({
  selector: 'app-edit-alarm',
  templateUrl: './edit-alarm.page.html',
  styleUrls: ['./edit-alarm.page.scss'],
  standalone: true,
  imports: [IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonItem, 
    IonLabel, 
    IonToggle, 
    IonInput, 
    IonDatetime, 
    IonCheckbox, 
    IonButton, 
    IonTextarea, 
    CommonModule, 
    FormsModule, 
    CardComponent
  ]
})
export class EditAlarmPage implements OnInit {
  isActive = true;

  alarm = {
    active: true,
    name: '',
    startTime: '07:00',
    description: '',
  };

  days = [
    { label: 'Lunes', selected: false },
    { label: 'Martes', selected: false },
    { label: 'Miércoles', selected: false },
    { label: 'Jueves', selected: false },
    { label: 'Viernes', selected: false },
    { label: 'Sábado', selected: false },
    { label: 'Domingo', selected: false },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAlarmsPage() {
    this.router.navigate(['/alarms']);
  }

  goToAddTaskPage() {
    this.router.navigate(['/created-tasks']);
  }
}
