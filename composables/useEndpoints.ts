export const endpoints = {
    firestore: {
      add: (col?: string) => `/api/add?col=${col}`,
      delete: (col: string, id: string) => `/api/delete?col=${col}&id=${id}`,
      query: (col: string) => `/api/query?col=${col}`,
    },
  };
  