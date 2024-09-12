import { Component } from '@angular/core';
import { HubConnection, HubConnectionBuilder, HubConnectionState, LogLevel } from '@microsoft/signalr'

@Component({
  selector: 'app-chat-hub-client',
  standalone: true,
  imports: [],
  templateUrl: './chat-hub-client.component.html',
  styleUrl: './chat-hub-client.component.css'
})
export class ChatHubClientComponent {
  private conn!: HubConnection;

  /**
   *
   */
  constructor() {
    this.conn = new HubConnectionBuilder()
        .withUrl('https://localhost:7244/hub')
        .configureLogging(LogLevel.Information)
        .build();

    this.conn.on("serverStarted", (message) => {
      alert("server started");
      console.log(message);
    });

    this.conn.on("pingServer", (message) => {
      alert("Ping")
      console.log("pingServer");
    });

    this.conn.on("serverStopped", (message) => {
      alert("server stopped");
      console.log(message);
    });
  }

  public async startServerHub() {
    try {
      if (this.conn.state == HubConnectionState.Disconnected) {

        await this.conn.start();
        await this.conn.invoke("StartServer", "Server has started");
      }
      else {
        alert("Server already started");
      }
    } catch (e) {
      console.error(e);
    }
  }

  public async pingHub() {
    try {
      if (this.conn.state == HubConnectionState.Connected) {
        await this.conn.invoke("PingServer", "Ping")
      } else {
        alert("Start server first");
      }

    } catch (e) {
      console.log(e);
    }
  }

  public async closeServerHub() {
    try {
      if (this.conn.state == HubConnectionState.Connected) {
        await this.conn.invoke("StopServer", "Server closed");
        await this.conn.stop();
      }
      else {
        alert("Server is already stopped");
      }
    } catch (e) {
      console.log(e);
    }
  }
}
