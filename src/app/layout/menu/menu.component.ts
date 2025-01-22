import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-menu',
  imports: [MatListModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  standalone: true,
})
export class MenuComponent {

}
