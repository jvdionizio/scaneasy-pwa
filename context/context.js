import { createContext, useEffect, useState } from "react";
import { productsObj } from "@/public/static/products";

export const StoreContext = createContext(null);

function StoreProvider({ children }) {
  const [list, setList] = useState();

  const [navBarNotification, setNavBarNotification] = useState({
    list:{
      show: false,
    },
    cart:{
      show: false,
    },
  });
  
  const [showAddOverlay, setShowAddOverlay] = useState({
    show: false,
    product: null,
    type: null,
  });
  
  const [showProductOverlay, setShowProductOverlay] = useState({
    show: false,
    product: null,
    productIndex: null,
  });
  
  const [cartConnect, setCartConnect] = useState(false);
  
  const [cart, setCart] = useState([]);

  const [deviceLogs, setDeviceLogs] = useState([])
  const [deviceName, setDeviceName] = useState('')
  const [receivedData, setReceivedData] = useState([])

  useEffect(() => {
    cart && receivedData[receivedData.length - 1] === "6a23691a" && setShowProductOverlay({show: true, product: cart[0], productIndex: 0});
    cart && receivedData[receivedData.length - 1] === "773218b3" && setShowProductOverlay({show: true, product: cart[1], productIndex: 1});
  }, [receivedData])

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
          setDeviceName(device.name)
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
          console.log(characteristic)
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
          setCartConnect(true)
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
  function log(data) {
    //terminalContainer.insertAdjacentHTML('beforeend',
    //    '<div' + (type ? ' class="' + type + '"' : '') + '>' + data + '</div>');
    console.log(data)
    setDeviceLogs([...deviceLogs, data])
  }

  const popUpRandomProduct = () => {
    const randomProduct = Math.floor(Math.random() * list.length);
    setShowProductOverlay({
      show: true,
      product: list[randomProduct],
      productIndex: randomProduct,
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        data.products.map((product) => {
          product.quantity = 0;
        });
        setList(data.products);
        setCart(data.products)
      })
      .catch(() => {
        productsObj.products.map((product) => {
          product.quantity = 0;
        });
        setList(productsObj.products);
        setCart(productsObj.products)
      });
  }, []);

  useEffect(() => {
    showAddOverlay.show && setTimeout(() => setShowAddOverlay({
      ...showAddOverlay,
      show: false,
    }), 1300);
  }, [showAddOverlay]);

  return (
    <StoreContext.Provider
      value={{
        list,
        showAddOverlay,
        cartConnect,
        cart,
        navBarNotification,
        showProductOverlay,
        deviceName,
        connect,
        setShowProductOverlay,
        popUpRandomProduct,
        setNavBarNotification,
        setCart,
        setCartConnect,
        setShowAddOverlay,
        setList
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;