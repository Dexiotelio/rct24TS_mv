export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.AUTH as string,
  },
};
