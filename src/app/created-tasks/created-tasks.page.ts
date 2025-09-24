import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CardComponent } from 'src/app/components/card/card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-created-tasks',
  templateUrl: './created-tasks.page.html',
  styleUrls: ['./created-tasks.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule, CardComponent]
})
export class CreatedTasksPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCreateAlarm() {
    this.router.navigate(['/create-alarm']);
  }
}
