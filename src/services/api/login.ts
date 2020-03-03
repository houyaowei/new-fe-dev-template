export const userLogin = (payload: any): Promise<object> => {
  console.log(
    "api->login,username:",
    payload.name,
    ",password:",
    payload.password
  );
  const promise = new Promise<object>(resolve => {
    console.log("api/login.ts");
    resolve({
      loginStatus: true
    });
  });

  return promise;
};
