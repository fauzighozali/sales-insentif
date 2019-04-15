import { device } from "./dimensions";


// DEFAULT LOCATION

const ASPECT_RATIO = device.width / device.height;
const LATITUDE = -6.8995776;
const LONGITUDE = 107.6286831;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export const initLocation = {
  aspectRatio: ASPECT_RATIO,
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
  space: SPACE
};

export const DEFAULT_PADDING = {
  top: 300,
  right: 100,
  bottom: 500,
  left: 100
};
