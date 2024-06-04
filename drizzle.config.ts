import { defineConfig } from "drizzle-kit";

import dotenv from "dotenv";

dotenv.config();

export default defineConfig ({
  dialect: "postgresql",
  out: "./drizzle",
  schema: "./src/server/db/schema.ts",
  dbCredentials: {
    url: process.env.POSTGRES_URL!
  },
  tablesFilter: ["beaconprep_*"],
})