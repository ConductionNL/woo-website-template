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
    let endpoint = `/search/publications?extend[]=catalog${filtersToQueryParams(
      filters,
    )}&_order[published]=desc&_limit=${limit}&_page=${currentPage}`;

    // TODO: Uncomment this when filtering on oin is available in the API
    // if (window.sessionStorage.getItem("OIDN_NUMBER")) {
    //   endpoint += `&organization.oin=${window.sessionStorage.getItem("OIDN_NUMBER")}`;
    // }

    const { data } = await this._send(this._instance, "GET", endpoint);

    return data;
  };

  public getOne = async (id: string): Promise<any> => {
    const { data } = await this._send(
      this._instance,
      "GET",
      `/search/publications/${id}?extend[]=themes`,
    );

    return data;
  };

  public getAttachments = async (id: string): Promise<any> => {
    const { data } = await this._send(this._instance, "GET", `/search/publications/${id}/attachments`);

    return data;
  };
}
