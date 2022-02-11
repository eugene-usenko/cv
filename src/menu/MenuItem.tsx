import { Bullet } from './Bullet'

export interface MenuItemType {
  name: string
  price: string
  description?: string
  duration: string
}

export const MenuItem = ({ name, price, duration, description }: MenuItemType) => {
  if (name.trim() === '') return <div className='border-b my-6'></div>

  return (
    <div className='flex flex-col mb-1 '>
      <div className=' flex justify-between items-center text-gray-800 transform transition-colors duration-200 '>
        <Bullet />
        <div className={'ml-4 mr-6 flex-1 '}>{name}</div>
        {/* <div className='flex-1 p-4'>
        <div className='border-b-2 border-gray-400 border-dotted'>&emsp;</div>
      </div> */}
        <div className='flex gap-x-2 items-end whitespace-nowrap'>
          <div className={'font-extrabold text-gray-900'}>{price}</div>
          <div className={'text-gray-400'}>{`${duration}`}</div>
        </div>
      </div>
      {description && <div className='text-sm text-gray-400 ml-8 mb-2 italic'>{description}</div>}
    </div>
  )
}
