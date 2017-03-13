import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { NoContentPage } from './pages/no-content/no-content.page';
import { DataComponent } from './components/data/data.component';
import { ContentResolver } from './services/content.resolver';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'nl/home', pathMatch: 'full' },
    {
        path: ':lang/:content',
        component: DataComponent,
        resolve: {
            data: ContentResolver
        }
    },
    { path: '**', component: NoContentPage }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
