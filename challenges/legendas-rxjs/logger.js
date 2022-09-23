const getTime = () => {
  return new Date().toISOString().split("T")[1].replace("Z", "");
};

export class Logger {
  static debug(message) {
    console.debug(`[ DEBUG ] [ ${new Date().toLocaleString()} ] - ${message}`);
  };
  
  static error (error) {
    console.error(`[ ERROR ] [ ${getTime()} ] - ${error}`);
  };
}
