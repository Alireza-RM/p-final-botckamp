import { useQuery } from "@tanstack/react-query";

import api from "../config/api";

export const useGetUserData = () => {
  const queryFn = () => api.get("/user/profile");
  const queryKey = ["user-data"];

  return useQuery({ queryFn, queryKey, retry: false });
};

export const useTourId = (id) => {
  const queryFn = () => api.get(`/tour/${id}`);
  const queryKey = ["oneTour", id];

  return useQuery({ queryFn, queryKey });
};

export const useProfileUser = () => {
  const queryFn = () => api.get(`/user/profile`);
  const queryKey = ["profileUser-data"];

  return useQuery({ queryFn, queryKey });
};

export const useGetBasket = () => {
  const queryFn = () => api.get(`/basket`);
  const queryKey = ["userBasket"];

  return useQuery({ queryFn, queryKey, retry: false });
};

export const useGetUserTours = () => {
  const queryFn = () => api.get(`/user/tours`);
  const queryKey = ["userTours"];

  return useQuery({ queryFn, queryKey, retry: false });
};

export const useGetTransactions = () => {
  const queryFn = () => api.get(`/user/transactions`);
  const queryKey = ["userTransactions"];

  return useQuery({ queryFn, queryKey, retry: false });
};
