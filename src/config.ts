export function getConfig() {
  return {
    serviceName: process.env.SERVICE_NAME ?? "forge",
    port: Number(process.env.PORT ?? 3000),
  };
}
