import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuComponent } from './layout/menu/menu.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, MenuComponent, MatSidenavModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
})
export class AppComponent {
  title = 'ang-finance-tracker';
}
