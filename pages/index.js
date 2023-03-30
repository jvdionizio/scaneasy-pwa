import BluetoothTerminal from "@/services/bluetoothService/BluetoothTerminal"
import { useEffect, useState } from "react"

export default function Home() {

  const [deviceLogs, setDeviceLogs] = useState('')

  const [deviceName, setDeviceName] = useState('')

  useEffect(() => {
    console.log(
      Object.values(deviceLogs)
    )
  }, [deviceLogs])


  const connect = () => {
    connectService()
  }

  const disconnect = () => {
    disconnectService()
  }

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

  // Obtain configured instance.
  const terminal = new BluetoothTerminal();


  // Override default log method to output messages to the terminal and console.
  terminal._log = function(...messages) {
    // We can't use `super._log()` here.
    messages.forEach((message) => {
      setDeviceLogs(message);
    });
  };

  // Implement own send function to log outcoming data to the terminal.
  const send = (data) => {
    terminal.send(data).
        then(() => setDeviceLogs(data)).
        catch((error) => setDeviceLogs(error));
  };


  // Bind event listeners to the UI elements.
  const connectService = () => {
  terminal.connect().
      then(() => {
        terminal.getDeviceName() ? setDeviceName(terminal.getDeviceName()) : setDeviceName('BLE Device');
      });
  };

  const disconnectService = () => {
  terminal.disconnect();
  };

  return (
    <>
      <div className='text-red-500 font-bold'>Hello Bluetooth</div>
      <div
        className='flex items-center gap-4 py-2'
      >
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={connect}
        >
          Connect
        </button>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={disconnect}
        >
          Disconnect
        </button>
      </div>
      <h2 className="text-blue-700 font-bold text-lg">
        {deviceName}
      </h2>
      <div className='border border-gray-300 rounded-md p-2'>
          <p>Log</p>
      </div>
    </>
  )
}
