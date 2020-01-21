export const userLogin = (): Promise<object> => {
  const promise = new Promise<object>(resolve => {
    resolve({
      loginStatus: true
    });
  });

  return promise;
};
