import { TSendFunction } from "../apiService";
import { AxiosInstance } from "axios";

export default class FooterContent {
  private _instance: AxiosInstance;
  private _send: TSendFunction;

  constructor(_instance: AxiosInstance, send: TSendFunction) {
    this._instance = _instance;
    this._send = send;
  }

  public getContent = async (fileName: string): Promise<any> => {
    const { data } = await this._send(this._instance, "GET", fileName);

    return data;
  };
}
