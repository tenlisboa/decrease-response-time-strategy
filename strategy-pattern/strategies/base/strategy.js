export class Strategy {
  promisses;
  middlewares;

  constructor(middlewares) {
    this.promisses = [];

    this.middlewares = middlewares
  }

  async run(initialContext) {
    this.middlewares.forEach(middleware => {
      this.promisses.push(middleware(initialContext));
    });

    return Promise.all(this.promisses);
  }
}
