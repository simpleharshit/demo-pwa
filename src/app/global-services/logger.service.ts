import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {
  enable: boolean = true;
  remoteLog: boolean = false;
  currentLevel: number = 3;
  levels: string[] = ["verbose", "debug", "log", "info", "warning", "error"];

  start() {
    this.enable = true;
  }

  stop() {
    this.enable = false;
  }

  verbose(message: any, object: any) {
    this.logMessage(0, message, object);
  }

  debug(message: any, object: any) {
    this.logMessage(1, message, object);
  }

  log(message: any, object?: any) {
    this.logMessage(2, message, object);
  }

  info(message: any, object?: any) {
    this.logMessage(3, message, object);
  }

  warn(message: any, object: any) {
    this.logMessage(4, message, object);
  }

  error(message: any, object: any) {
    this.logMessage(5, message, object);
  }

  logMessage(logType: number, message: any, object: any) {
    if (!this.enable) return;
    if (logType < this.currentLevel) return;

    switch (logType) {
      case 0: case 1: case 4:
        object ? console.warn(message, object) : console.warn(message);

        break;
      case 2:
        object ? console.log(message, object) : console.log(message);

        break;
      case 3:
        object ? console.info(message, object) : console.info(message);

        break;
      case 5:
        object ? console.error(message, object) : console.error(message);

        break;
    }
  }
}
