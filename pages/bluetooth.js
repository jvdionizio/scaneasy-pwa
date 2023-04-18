import { useState, useEffect } from "react"
import { }

export default function BluetoothPage() {

  const [device, setDevice] = useState(null);
  const [characteristics, setCharacteristics] = useState([]);

  
  const handleConnect = async () => {
    try {
      const device = await connect();
      setDevice(device);

      const services = await device.discoverServices([]);
      const characteristic = await services[0].discoverCharacteristics([])[0];
      setCharacteristics([characteristic]);

      characteristic.on('data', data => {
        console.log('Received data:', data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDisconnect = () => {
    disconnect(device.id);
    setDevice(null);
    setCharacteristics([]);
  };

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
  }, []);


  return (
    <>
      <div className='text-red-500 font-bold'>Hello Bluetooth</div>
      <div
        className='flex items-center gap-4 py-2'
      >
        <button
          className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={handleConnect}
        >
          Connect
        </button>
        <button
          className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={handleDisconnect}
        >
          Disconnect
        </button>
      </div>
      <h2 className="text-blue-700 font-bold text-lg">
        {deviceName}
      </h2>
      <div className='flex flex-col gap-4 border border-gray-300 rounded-md p-2'>
          <p>Characteristics</p>
          <div className='border border-gray-300 rounded-md p-2'>
          {characteristics.map((characteristic, index) => (
            <div key={index}>
              <h3>Characteristic {index + 1}</h3>
              <p>UUID: {characteristic.uuid}</p>
            </div>
          ))}
          </div>
      </div>
    </>
  )
}
