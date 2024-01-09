function logger() {
  console.log(`I output only external context: ${this.item}`);
}
const obj = { item: "some value" };

// bind
const bindedLogger = logger.bind(obj);
bindedLogger();

// call
logger.call(obj);

// apply
logger.apply(obj);

logger();
