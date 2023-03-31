import BluetoothTerminal from "@/services/bluetoothService/BluetoothTerminal"
import { useEffect, useState } from "react"

export default function BluetoothPage() {

  const [deviceLogs, setDeviceLogs] = useState([])

  const [deviceName, setDeviceName] = useState('')

  useEffect(() => {

  }, [deviceLogs])


  const connect = () => {
    connectService()
  }

  const disconnect = () => {
    disconnectService()
  }

  // Obtain configured instance.
  const terminal = new BluetoothTerminal();


  // Override default log method to output messages to the terminal and console.
  terminal._log = function(...messages) {
    // We can't use `super._log()` here.
    messages.forEach((message) => {
      setDeviceLogs( [...deviceLogs, message] );
    });
  };

  // Implement own send function to log outcoming data to the terminal.
  const send = (data) => {
    terminal.send(data).
        then(() => setDeviceLogs( [...deviceLogs, data] )).
        catch((error) => setDeviceLogs( [...deviceLogs, error] ));
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
      <div className='flex flex-col gap-4 border border-gray-300 rounded-md p-2'>
          <p>Log</p>
          <div className='border border-gray-300 rounded-md p-2'>
            {deviceLogs.map((log, index) => (
              <p key={index}>{log.message}</p>
            ))}
          </div>
      </div>
    </>
  )
}
