import { Component } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr'

@Component({
  selector: 'app-chat-hub-client',
  standalone: true,
  imports: [],
  templateUrl: './chat-hub-client.component.html',
  styleUrl: './chat-hub-client.component.css'
})
export class ChatHubClientComponent {
  private conn!: HubConnection;

  public async connectHub() {
    try {
      this.conn = new HubConnectionBuilder()
        .withUrl('https://localhost:7244/pinPadHub')
        .configureLogging(LogLevel.Information)
        .build();

      this.conn.on("messageReceived", (message) => {
        console.log(message);
      });

      this.conn.on("ConnectionTested", (message) => {
        console.log("ConnectionTested");
      });

      await this.conn.start();
      await this.conn.invoke("NewMessage", "Hola");
    } catch (e) {

    }
  }

  public async testConnection() {
    try {
      await this.conn.invoke("TestConnection", "Connection tested")

    } catch (e) {
      console.log(e);
    }
  }
}
