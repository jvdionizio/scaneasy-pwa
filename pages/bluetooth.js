import { useState } from "react"

export default function BluetoothPage() {

  const [deviceLogs, setDeviceLogs] = useState([])

  const [deviceName, setDeviceName] = useState('')

  const [receivedData, setReceivedData] = useState([])

  //TROQUEI DE LUGAR A FUNÇÃO EM RELAÇÃO AO CÓDIGO ORIGINAL!!!!
  // Processa os dados recebidos
  function receive(data) {
    log(data, 'in');
    setReceivedData([...receivedData, data])
  }

  // Cache de objeto de dispositivo selecionado
  let deviceCache = null;

  // Cache de objeto de recurso
  let characteristicCache = null;

  // Buffer intermediário para dados de entrada
  let readBuffer = '';

  // Inicia a seleção do dispositivo Bluetooth e conecta-se ao
  function connect() {
    return (deviceCache ? Promise.resolve(deviceCache) :
        requestBluetoothDevice()).
        then(device => connectDeviceAndCacheCharacteristic(device)).
        then(characteristic => startNotifications(characteristic)).
        catch(error => log(error));
  }

  // Solicitação para selecionar um dispositivo Bluetooth
  function requestBluetoothDevice() {
    log('Requesting bluetooth device...');

    return navigator.bluetooth.requestDevice({
      filters: [{services: [0xFFE0]}],
    }).
        then(device => {
          log('"' + device.name + '" bluetooth device selected');
          deviceCache = device;
          deviceCache.addEventListener('gattserverdisconnected',
              handleDisconnection);

          return deviceCache;
        });
  }

  // Desconecta o manipulador
  function handleDisconnection(event) {
    let device = event.target;

    log('"' + device.name +
        '" bluetooth device disconnected, trying to reconnect...');

    connectDeviceAndCacheCharacteristic(device).
        then(characteristic => startNotifications(characteristic)).
        catch(error => log(error));
  }

  // Conecte-se a um dispositivo específico, obtenha serviço e características
  function connectDeviceAndCacheCharacteristic(device) {
    if (device.gatt.connected && characteristicCache) {
      return Promise.resolve(characteristicCache);
    }

    log('Connecting to GATT server...');

    return device.gatt.connect().
        then(server => {
          log('GATT server connected, getting service...');

          return server.getPrimaryService(0xFFE0);
        }).
        then(service => {
          log('Service found, getting characteristic...');

          return service.getCharacteristic(0xFFE1);
        }).
        then(characteristic => {
          log('Characteristic found');
          characteristicCache = characteristic;

          return characteristicCache;
        });
  }

  // Habilitando o recebimento de notificações sobre a mudança da característica
  function startNotifications(characteristic) {
    log('Starting notifications...');

    return characteristic.startNotifications().
        then(() => {
          log('Notifications started');
          characteristic.addEventListener('characteristicvaluechanged',
              handleCharacteristicValueChanged);
        });
  }

  // Obter dados
  function handleCharacteristicValueChanged(event) {
    let value = new TextDecoder().decode(event.target.value);

    for (let c of value) {
      if (c === '\n') {
        let data = readBuffer.trim();
        readBuffer = '';

        if (data) {
          receive(data);
        }
      }
      else {
        readBuffer += c;
      }
    }
  }

  // Saída para o terminal
  function log(data, type = '') {
    //terminalContainer.insertAdjacentHTML('beforeend',
    //    '<div' + (type ? ' class="' + type + '"' : '') + '>' + data + '</div>');
    setDeviceLogs([...deviceLogs, data])
  }

  // Desconecta do dispositivo conectado
  function disconnect() {
    if (deviceCache) {
      log('Disconnecting from "' + deviceCache.name + '" bluetooth device...');
      deviceCache.removeEventListener('gattserverdisconnected',
          handleDisconnection);

      if (deviceCache.gatt.connected) {
        deviceCache.gatt.disconnect();
        log('"' + deviceCache.name + '" bluetooth device disconnected');
      }
      else {
        log('"' + deviceCache.name +
            '" bluetooth device is already disconnected');
      }
    }

    if (characteristicCache) {
      characteristicCache.removeEventListener('characteristicvaluechanged',
          handleCharacteristicValueChanged);
      characteristicCache = null;
    }

    deviceCache = null;
  }

  //Envia dados para o dispositivo conectado
  function send(data) {
    log("enviando",'out');
    data = String(data);
    try
    {
      if (!data || !characteristicCache) {
      log("Conectou???",'out');
      return;
      }

      data += '\n';

      if (data.length > 20) {
      let chunks = data.match(/(.|[\r\n]){1,20}/g);

      writeToCharacteristic(characteristicCache, chunks[0]);

      for (let i = 1; i < chunks.length; i++) {
        setTimeout(() => {
        writeToCharacteristic(characteristicCache, chunks[i]);
        }, i * 100);
      }
      }
      else {
      writeToCharacteristic(characteristicCache, data);
      }

      log(data, 'out');
    }
    catch(err)
    {
      log('deu erro','out');
    }
  }

  // Escreve o valor na característica
  function writeToCharacteristic(characteristic, data) {
    characteristic.writeValue(new TextEncoder().encode(data));
  }

  return (
    <>
      <div className='text-red-500 font-bold'>Hello Bluetooth</div>
      <div
        className='flex items-center gap-4 py-2'
      >
        <button
          className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={connect}
        >
          Connect
        </button>
        <button
          className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
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
      <div className='flex flex-col gap-4 border border-gray-300 rounded-md p-2'>
          <p>Received Data</p>
          <div className='border border-gray-300 rounded-md p-2'>
            {receivedData.map((log, index) => (
              <p key={index}>{log.message}</p>
            ))}
          </div>
      </div>
      <div>
        <button
          className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => send('oi caralho')}
        >
          Send
        </button>
      </div>
    </>
  )
}
