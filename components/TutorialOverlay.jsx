import clsx from "clsx";

export default function TutorialOverLay(show, setShow) {
  return(
    <div
      className={
        clsx(
          'w-screen',
          'h-screen',
          'absolute',
          'top-0',
          'left-0',
          'flex',
          'flex-col',
          'bg-blue-700',
          'opacity-95',
          'py-10',
          'px-6',
          'z-50',
          {
            'hidden': !show
          }
        )
      }
    >
      <div
        className='bg-white w-full h-full flex flex-col gap-8 p-6 rounded-xl'
      >
        
      </div>
    </div>
  )
}