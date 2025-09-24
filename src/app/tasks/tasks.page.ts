import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CardComponent } from '../components/card/card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, CardComponent, IonButton]
})
export class TasksPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMainView() {
    this.router.navigate(['/main-view']);
  }

  goToCreateTask() {
    this.router.navigate(['/create-task']);
  }

  goToEditTask() {
    this.router.navigate(['/edit-task']);
  }
}
