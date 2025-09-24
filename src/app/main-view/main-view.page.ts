import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.page.html',
  styleUrls: ['./main-view.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule]
})
export class MainViewPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAlarms() {
    this.router.navigate(['/alarms']);
  }

  goToTasks() {
    this.router.navigate(['/tasks']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  goToStatistics() {
    this.router.navigate(['/statistics']);
  }
}
