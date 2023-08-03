import { IFiltersContext } from "../../context/filters";
import { TSendFunction } from "../apiService";
import { AxiosInstance } from "axios";

export default class Verzoeken {
  private _instance: AxiosInstance;
  private _send: TSendFunction;

  constructor(_instance: AxiosInstance, send: TSendFunction) {
    this._instance = _instance;
    this._send = send;
  }

  public getAll = async (filters?: IFiltersContext): Promise<any> => {
    const { data } = await this._send(this._instance, "GET", `/openWOO`);

    return data;
  };

  public getOne = async (id: string): Promise<any> => {
    const { data } = await this._send(this._instance, "GET", `/openWOO/${id}`);

    return data;
  };
}
