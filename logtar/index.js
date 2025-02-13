// index.js

class LogLevel {
  static Debug = 0;
  static Info = 1;
  static Warn = 2;
  static Error = 3;
  static Critical = 4;

  static assert(log_level) {
    if (
      ![
        LogLevel.Debug,
        LogLevel.Info,
        LogLevel.Warn,
        LogLevel.Error,
        LogLevel.Critical,
      ].includes(log_level)
    ) {
      throw new Error(
        `log_level must be an instance of LogLevel. Unsupported param ${JSON.stringify(
          log_level
        )}`
      );
    }
  }
}

class Logger {
  // set a default value for the log level
  #level = LogLevel.Info;

  constructor(log_level) {
    // only set/check the log level if the client has provided it
    // otherwise use the default value, i.e `LogLevel.Info`
    if (arguments.length > 0) {
      LogLevel.assert(log_level);
      this.#level = log_level;
    }
  }

  get level() {
    return this.#level;
  }
}

module.exports = {
  Logger,
  LogLevel,
};

// const log = new Logger();
// const log = new Logger(LogLevel.Info);
console.log(log.level);
