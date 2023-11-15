import { IFiltersContext } from "../../context/filters";
import { filtersToQueryParams } from "../../services/filtersToQueryParams";
import { TSendFunction } from "../apiService";
import { AxiosInstance } from "axios";

export const OPEN_WOO_LIMIT = 6;

export default class OpenWoo {
  private _instance: AxiosInstance;
  private _send: TSendFunction;

  constructor(_instance: AxiosInstance, send: TSendFunction) {
    this._instance = _instance;
    this._send = send;
  }

  public getAll = async (filters: IFiltersContext, currentPage: number, limit: number): Promise<any> => {
    let endpoint = `/openWOO?extend[]=all${filtersToQueryParams(
      filters,
    )}&_order[Publicatiedatum]=desc&_limit=${limit}&_page=${currentPage}`;

    if (window.sessionStorage.getItem("OIDN_NUMBER")) {
      endpoint += `&oidn=${window.sessionStorage.getItem("OIDN_NUMBER")}`;
    }

    const { data } = await this._send(this._instance, "GET", endpoint);

    return data;
  };

  public getOne = async (id: string): Promise<any> => {
    const { data } = await this._send(this._instance, "GET", `/openWOO/${id}`);

    return data;
  };
}
