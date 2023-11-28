export type MyProfileType = {
  providerId: number;
  role: string;
  realName: string;
  nickName: string;
  phoneNumber: string;
  address: {
    name: string;
    xCoordinate: number;
    yCoordinate: number;
  };
};
