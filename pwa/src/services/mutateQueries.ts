import { QueryClient } from "react-query";

const addItem = async (queryClient: QueryClient, queryKey: string, item: any) => {
  await queryClient.cancelQueries(queryKey);

  const previousQueryData = queryClient.getQueryData<any[]>(queryKey);

  if (previousQueryData) {
    queryClient.setQueryData(queryKey, [item, ...previousQueryData]);
  }

  queryClient.invalidateQueries(queryKey);
};

const updateItem = async (queryClient: QueryClient, queryKey: string, item: any) => {
  await queryClient.cancelQueries(queryKey);

  const previousQueryData = queryClient.getQueryData<any[]>(queryKey);

  if (previousQueryData) {
    const index = previousQueryData.findIndex((previousItem) => previousItem.id === item.id);

    previousQueryData[index] = item;

    queryClient.setQueryData(queryKey, previousQueryData);
  }

  queryClient.invalidateQueries(queryKey);
};

const deleteItem = async (queryClient: QueryClient, queryKey: string, itemId: any) => {
  await queryClient.cancelQueries(queryKey);

  const previousQueryData = queryClient.getQueryData<any[]>(queryKey);

  if (previousQueryData) {
    const newQueryData = previousQueryData.filter((previousItem) => previousItem.id !== itemId);
    queryClient.setQueryData(queryKey, [...newQueryData]);
  }

  queryClient.invalidateQueries(queryKey);
};

export { addItem, updateItem, deleteItem };
