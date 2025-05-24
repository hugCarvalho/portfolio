import { server } from "../config/server";

export const UTILS = {
  sendRequest: async (pathname) => {
    //Fire-and-forget, no handling neede
    if (process.env.NODE_ENV === 'production') {
      fetch(`${server}${pathname}`,
        {
          method: "POST",
        }
      )
    }
  }
}
