import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '8cf8672a-7c67-4046-857e-e54f45e937d1', queries,  });
export default client;
  