import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'main-view',
    loadComponent: () => import('./main-view/main-view.page').then( m => m.MainViewPage)
  },
  {
    path: 'alarms',
    loadComponent: () => import('./alarms/alarms.page').then( m => m.AlarmsPage)
  },
  {
    path: 'tasks',
    loadComponent: () => import('./tasks/tasks.page').then( m => m.TasksPage)
  },
  {
    path: 'create-alarm',
    loadComponent: () => import('./create-alarm/create-alarm.page').then( m => m.CreateAlarmPage)
  },
  {
    path: 'created-tasks',
    loadComponent: () => import('./created-tasks/created-tasks.page').then( m => m.CreatedTasksPage)
  },
  {
    path: 'edit-alarm',
    loadComponent: () => import('./edit-alarm/edit-alarm.page').then( m => m.EditAlarmPage)
  },
  {
    path: 'create-task',
    loadComponent: () => import('./create-task/create-task.page').then( m => m.CreateTaskPage)
  },
  {
    path: 'edit-task',
    loadComponent: () => import('./edit-task/edit-task.page').then( m => m.EditTaskPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'statistics',
    loadComponent: () => import('./statistics/statistics.page').then( m => m.StatisticsPage)
  },
];
