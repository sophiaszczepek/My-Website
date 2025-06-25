import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { Projects }from './projects/projects';
import { Home }   from './home/home';
import { Contact } from './contact/contact';


@Component({
  standalone:      true, 
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Home, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'My Website';
}
