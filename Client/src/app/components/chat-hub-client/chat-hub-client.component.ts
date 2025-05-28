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

    this.conn.on("santanderPinPadActivated", (message) => {
      alert(message);
    });

    this.conn.on("bbvaVenta", (result) => {
      alert(result);
    });

    this.conn.on("bbvaCancelacion", (result) => {
      alert(result);
    });

    this.conn.on("bbvaCancelacionDevolucion", (result) => {
      alert(result);
    });

  }

  public async startServerHub() {
    try {
      if (this.conn.state != HubConnectionState.Connected) {

        await this.conn.start();
        await this.conn.invoke("StartServer", "Server has started");
      }
      else {
        alert("Server already started");
      }
    } catch (e) {
      alert(e);
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

  public async conectarSantander() {
    try {
      if (this.conn.state == HubConnectionState.Connected) {
        await this.conn.invoke("TestSantander");
      }
      else {
        alert("Start server first");
      }
    } catch (e) {
      console.log(e);
    }
  }

  public async inicializarSantander() {
    try {
      if (this.conn.state == HubConnectionState.Connected) {
        await this.conn.invoke("ActivateSantanderPinPad", "2", "2");
      }
      else {
        alert("Start server first");
      }
    } catch (e) {
      console.log(e);
    }

  }
  public async cobroBbva() {
    try {
      if (this.conn.state == HubConnectionState.Connected) {
        await this.conn.invoke("Venta", 899, "123456789012");
      }
      else {
        alert("Start server first");
      }
    } catch (e) {
      console.log(e);
    }

  }
  public async cancelaBbva() {
    try {
      if (this.conn.state == HubConnectionState.Connected) {
        await this.conn.invoke("CancelacionBbva", "123456789012", "0");
      }
      else {
        alert("Start server first");
      }
    } catch (e) {
      console.log(e);
    }

  }
  public async cancelacionDevolucionBbva() {
    try {
      if (this.conn.state == HubConnectionState.Connected) {
        await this.conn.invoke("CancelacionDevolucionBbva",10.5, "123456789012", "0");
      }
      else {
        alert("Start server first");
      }
    } catch (e) {
      console.log(e);
    }

  }
}
