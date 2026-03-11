export function health(serviceName: string) {
  return {
    service: serviceName,
    status: "ok",
    checkedAt: new Date().toISOString(),
  };
}
