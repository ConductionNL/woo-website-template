import { TSendFunction } from "../apiService";
import { AxiosInstance } from "axios";

export default class GitHub {
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

  public getDirectoryItems = async (directoryPath: string): Promise<any> => {
    const { data } = await this._send(this._instance, "GET", directoryPath);

    if (!data) return [];

    const filteredData = data.filter((item: any) => item.name.includes(".md")); // remove all non .md files
    const mappedData = filteredData?.map((item: any) => ({
      href: item.name.replace(".md", ""),
      name: item.name.replace("_", " ").replace(".md", ""),
    }));

    return mappedData;
  };
}
