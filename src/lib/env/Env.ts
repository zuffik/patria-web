export interface Env extends NodeJS.ProcessEnv {
  GOOGLE_MAPS_API_KEY?: string;
  GOOGLE_MAPS_MAP_ID?: string;
  GA_MEASUREMENT_ID?: string;
}

export const env = process.env as Env;
