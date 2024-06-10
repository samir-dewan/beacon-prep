import { defineConfig } from "drizzle-kit";

export default defineConfig ({
  dialect: "postgresql",
  out: "./drizzle",
  schema: "./src/server/db/schema.ts",
  dbCredentials: {
    url: "postgres://default:faEqwo0K1yBn@ep-icy-bush-a2qcv8r7-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require"
  },
})