export const getCenter = (mapProps, map) => {
  onchangeCenter({ lat: map.center.lat(), lon: map.center.lng() });
};
