import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'commands/:id',
    loadChildren: () => import('./pages/commands/commands.module').then( m => m.CommandsPageModule)
  },
  {
    path: 'list/:id',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./pages/videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'qabr-questions',
    loadChildren: () => import('./pages/qabr-questions/qabr-questions.module').then( m => m.QabrQuestionsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'tasbeeh',
    loadChildren: () => import('./pages/tasbeeh/tasbeeh.module').then( m => m.TasbeehPageModule)
  },
  {
    path: 'shahadat',
    loadChildren: () => import('./pages/shahadat/shahadat.module').then( m => m.ShahadatPageModule)
  },
  {
    path: 'janazah',
    loadChildren: () => import('./pages/janazah/janazah.module').then( m => m.JanazahPageModule)
  },
  {
    path: 'hadith',
    loadChildren: () => import('./pages/hadith/hadith.module').then( m => m.HadithPageModule)
  },
  {
    path: 'hoor',
    loadChildren: () => import('./pages/hoor/hoor.module').then( m => m.HoorPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
