export const msToTime = duration => {
  const hours = Math.floor(duration / (1000 * 60 * 60));
  const minutes = Math.floor((duration / (1000 * 60)) % 60);

  return `${hours}h ${minutes}m`;
};
