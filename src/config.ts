export function getConfig() {
  return {
    serviceName: process.env.SERVICE_NAME ?? "service-template",
    port: Number(process.env.PORT ?? 3000),
  };
}
