import { TSendFunction } from "../apiService";
import { AxiosInstance } from "axios";

export default class Markdown {
  private _instance: AxiosInstance;
  private _send: TSendFunction;
  constructor(_instance: AxiosInstance, send: TSendFunction) {
    this._instance = _instance;
    this._send = send;
  }

  public getContent = async (filePath: string): Promise<any> => {
    const { data } = await this._send(this._instance, "GET", filePath);

    return data;
  };
}
