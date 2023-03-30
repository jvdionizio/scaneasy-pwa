import { connectService } from "@/services/bluetoothService"

export default function Home() {

  const connect = () => {
    connectService()
  }

  return (
    <>
      <div className='text-red-500 font-bold'>Hello tailwindcss</div>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={connect}
      >
        Connect
      </button>
    </>
  )
}
