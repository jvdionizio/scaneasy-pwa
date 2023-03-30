import { connectService, disconnectService, logToTerminal } from "@/services/bluetoothService"
import { useEffect, useState } from "react"

export default function Home() {

  const [deviceLogs, setDeviceLogs] = useState('')

  useEffect(() => {
    console.log('entrou');
    setDeviceLogs(logToTerminal)
  }, [logToTerminal])

  const connect = () => {
    connectService()
  }

  const disconnect = () => {
    disconnectService()
  }

  return (
    <>
      <div className='text-red-500 font-bold'>Hello tailwindcss</div>
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
      <div className='border border-gray-300 rounded-md p-2'>
          <p>Log</p>
          <p>{ deviceLogs }</p>
      </div>
    </>
  )
}
