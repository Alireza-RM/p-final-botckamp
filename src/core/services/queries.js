import { useQuery } from "@tanstack/react-query";

import api from "../config/api";
import { useCallback } from "react";

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
