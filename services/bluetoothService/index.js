import BluetoothTerminal from "./BluetoothTerminal";

/* // Helpers.
const defaultDeviceName = 'Terminal';
const terminalAutoScrollingLimit = terminalContainer.offsetHeight / 2;
let isTerminalAutoScrolling = true;

const scrollElement = (element) => {
  const scrollTop = element.scrollHeight - element.offsetHeight;

  if (scrollTop > 0) {
    element.scrollTop = scrollTop;
  }
}; */

export let logToTerminal = '';

// Obtain configured instance.
const terminal = new BluetoothTerminal();


// Override default log method to output messages to the terminal and console.
terminal._log = function(...messages) {
  // We can't use `super._log()` here.
  messages.forEach((message) => {
    console.log("message", message);
    logToTerminal = message;
  });
};

// Implement own send function to log outcoming data to the terminal.
const send = (data) => {
  terminal.send(data).
      then(() => logToTerminal = data).
      catch((error) => logToTerminal = error);
};


// Bind event listeners to the UI elements.
export const connectService = () => {
  terminal.connect().
      then(() => {
        deviceNameLabel.textContent = terminal.getDeviceName() ?
            terminal.getDeviceName() : defaultDeviceName;
      });
};

export const disconnectService = () => {
  terminal.disconnect();
};