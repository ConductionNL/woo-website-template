import { TSendFunction } from "../apiService";
import { AxiosInstance } from "axios";

export default class AvailableFilters {
  private _instance: AxiosInstance;
  private _send: TSendFunction;

  constructor(_instance: AxiosInstance, send: TSendFunction) {
    this._instance = _instance;
    this._send = send;
  }

  public getCategory = async (): Promise<any> => {
    let endpoint = "/openWOO?_queries[]=Categorie";

    if (process.env.GATSBY_OIDN_NUMBER) {
      endpoint += `&oidn=${process.env.GATSBY_OIDN_NUMBER}`;
    }

    const { data } = await this._send(this._instance, "GET", endpoint);

    return data;
  };
}
