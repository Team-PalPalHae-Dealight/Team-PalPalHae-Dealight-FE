export type profileType = {
  address: {
    name: string | undefined;
    xCoordinate: number;
    yCoordinate: number;
  };
  nickName: string;
  phoneNumber: string;
  providerId?: number;
  realName?: string;
  role?: string;
};
