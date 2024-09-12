import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatHubClientComponent } from "./components/chat-hub-client/chat-hub-client.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatHubClientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signalR';
}
