export const getEnv = (key, fallback = undefined) => {
  if (window._env_ && window._env_[key]) {
    return window._env_[key];
  }
  if (import.meta.env && import.meta.env[key]) {
    return import.meta.env[key];
  }
  return fallback;
};

export const APIGEE_URL = getEnv('VITE_APIGEE_URL', 'https://api-np.boavistascpc.com.br/interconnect-dev/pj/report/default');
export const APIGEE_CLIENT = getEnv('VITE_APIGEE_CLIENT', 'apigeeclient');
export const APIGEE_SECRET = getEnv('VITE_APIGEE_SECRET', 'apigeesecret');
