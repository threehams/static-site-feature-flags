export const delay = (duration: number, name: string) => {
  if (name) {
    console.log(`delaying ${duration}ms for ${name}`);
  }
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(`done with ${name}`);
      resolve();
    }, duration);
  });
};
