import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'


@Component({
  selector: 'app-menu',
  imports: [MatListModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  standalone: true,
})
export class MenuComponent {
}
