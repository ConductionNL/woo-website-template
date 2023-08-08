import axios, { AxiosInstance, AxiosResponse } from "axios";
import toast from "react-hot-toast";

// Resources
import OpenWoo from "./resources/openWoo";

interface PromiseMessage {
  loading?: string;
  success?: string;
}

export type TSendFunction = (
  instance: AxiosInstance,
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  payload?: JSON,
  promiseMessage?: PromiseMessage,
) => Promise<AxiosResponse>;

export default class APIService {
  public get BaseClient(): AxiosInstance {
    return axios.create({
      baseURL: process.env.GATSBY_API_BASE_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  public get OpenWoo(): OpenWoo {
    return new OpenWoo(this.BaseClient, this.Send);
  }

  // Send method
  public Send: TSendFunction = (instance, method, endpoint, payload, promiseMessage) => {
    const _payload = JSON.stringify(payload);

    switch (method) {
      case "GET":
        const response = instance.get(endpoint);

        response.catch((err) => toast.error(err.message));

        return response;

      case "POST":
        return toast.promise(instance.post(endpoint, _payload), {
          loading: promiseMessage?.loading ?? "Creating item...",
          success: promiseMessage?.success ?? "Succesfully created item",
          error: (err: Error) => err.message,
        });

      case "PUT":
        return toast.promise(instance.put(endpoint, _payload), {
          loading: promiseMessage?.loading ?? "Updating item...",
          success: promiseMessage?.success ?? "Succesfully updated item",
          error: (err: Error) => err.message,
        });

      case "DELETE":
        return toast.promise(instance.delete(endpoint), {
          loading: promiseMessage?.loading ?? "Deleting item...",
          success: promiseMessage?.success ?? "Succesfully deleted item",
          error: (err: Error) => err.message,
        });
    }
  };
}
