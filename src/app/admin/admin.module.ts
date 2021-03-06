import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { PostPageComponent } from '../post-page/post-page.component';

import { SharedModule } from '../shared.module';
import { CreatePageComponent } from './create-page/create-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { SearchPipe } from './shared/search.pipe';
import { AuthGuard } from './shared/services/auth.guard';


@NgModule ({
    declarations: [
        AdminLayoutComponent,
        LoginPageComponent,
        DashboardPageComponent,
        CreatePageComponent,
        SearchPipe,
        EditPageComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
        RouterModule.forChild( [
            {
                path: '', component: AdminLayoutComponent, children: [
                    {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
                    {path: 'login', component: LoginPageComponent},
                    {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
                    {path: 'create', component: CreatePageComponent, canActivate: [AuthGuard]},
                    {path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]},
                ]
            }
        ])
    ],
    exports:
    [
        RouterModule,
    ],
    providers: [
        AuthGuard
    ]
})

export class AdminModule {

}
