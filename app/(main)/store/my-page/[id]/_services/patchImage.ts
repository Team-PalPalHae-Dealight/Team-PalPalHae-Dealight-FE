import { axiosInstance } from '@/app/_services/apiClient';

type ReqType = {
  req: { storeId: number; formData: File };
};

export const patchImage = ({ req }: ReqType) => {
  return axiosInstance
    .patch(
      `/stores/images/${req.storeId}`,
      {
        file: req.formData,
      },
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
