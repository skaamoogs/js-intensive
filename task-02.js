function logger() {
  console.log(`I output only external context: ${this.item}`);
}
const obj = { item: "some value" };

// bind
const boundLogger = logger.bind(obj);
boundLogger();

// call
logger.call(obj);

// apply
logger.apply(obj);
