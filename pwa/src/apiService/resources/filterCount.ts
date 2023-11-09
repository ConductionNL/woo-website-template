import { TSendFunction } from "../apiService";
import { AxiosInstance } from "axios";

export const OPEN_WOO_LIMIT = 6;

export default class FilterCount {
  private _instance: AxiosInstance;
  private _send: TSendFunction;

  constructor(_instance: AxiosInstance, send: TSendFunction) {
    this._instance = _instance;
    this._send = send;
  }

  public getCategoryCount = async (): Promise<any> => {
    const endpoint = "/openWOO?_queries[]=Categorie";

    const { data } = await this._send(this._instance, "GET", endpoint);

    return data;
  };
}
