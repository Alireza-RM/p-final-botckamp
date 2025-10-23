import api from "../config/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setCookie } from "../utils/cookie";

export const useSendOtp = () => {
  const mutationFn = (data) => api.post("/auth/send-otp", data);

  return useMutation({ mutationFn });
};

export const useCheckOtp = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("/auth/check-otp", data);

  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 365);
    queryClient.invalidateQueries(["user-data"]);
  };

  return useMutation({ mutationFn, onSuccess });
};

export const useEditProfile = () => {
  const mutationFn = (data) => api.put("/user/profile", data);

  return useMutation({ mutationFn });
};

export const useAddBasket = () => {
  const mutationFn = (id) => api.put(`/basket/${id}`);

  return useMutation({ mutationFn });
};

export const useSendOrder = () => {
  const mutationFn = (data) => api.post("/order", data);

  return useMutation({ mutationFn });
};