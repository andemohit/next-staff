namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    AUTH0_CLIENT_ID: string;
    AUTH0_CLIENT_SECRET: string;
    AUTH0_DOMAIN: string;

    SECRET: string;

    EMAIL_SERVER: string;
    EMAIL_FROM: string;

    DATABASE_URL: string;
  }
}
