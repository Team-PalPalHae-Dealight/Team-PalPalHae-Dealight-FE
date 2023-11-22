export type profileType = {
  addressName: string;
  closeTime: string;
  dayOff?: string[];
  image: string;
  name: string;
  openTime: string;
  storeNumber: string;
  storeStatus: string;
  telephone: string;
  userPhone: string;
  userName: string;
};

export type PatchProfileType = {
  telephone: string;
  addressName: string;
  xCoordinate: number;
  yCoordinate: number;
  openTime: string;
  closeTime: string;
  dayOff?: string[];
};
