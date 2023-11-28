export type MyProfileType = {
  providerId?: number;
  role?: string;
  realName?: string;
  nickName: string | null;
  phoneNumber: string | null;
  address: {
    name: string;
    xCoordinate: number;
    yCoordinate: number;
  };
};
