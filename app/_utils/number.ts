export function formatPhoneNumber(phoneNumber: string) {
  const isSeoulNumber = phoneNumber.startsWith('02');
  const areaCodeEndIndex = isSeoulNumber ? 2 : 3;

  return [
    phoneNumber.slice(0, areaCodeEndIndex),
    phoneNumber.slice(areaCodeEndIndex, phoneNumber.length - 4),
    phoneNumber.slice(phoneNumber.length - 4),
  ].join('-');
}
