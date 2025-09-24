export const getEnv = (key: string, fallback: string | undefined = undefined) => {
  if ((window as any)._env_ && (window as any)._env_[key]) {
    return (window as any)._env_[key];
  }
  if ((import.meta as any).env && (import.meta as any).env[key]) {
    return (import.meta as any).env[key];
  }
  return fallback;
};

export const APIGEE_URL = getEnv('VITE_APIGEE_URL', 'https://api-np.boavistascpc.com.br/interconnect-dev/pj/report/default');
export const APIGEE_CLIENT = getEnv('VITE_APIGEE_CLIENT', 'apigeeclient');
export const APIGEE_SECRET = getEnv('VITE_APIGEE_SECRET', 'apigeesecret');
