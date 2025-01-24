import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { IncomeComponent } from './views/income/income.component';
import { ExpensesComponent } from './views/expenses/expenses.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path:'home', component: HomeComponent },
    { path: 'income', component: IncomeComponent},
    { path: 'expenses', component: ExpensesComponent}
];
