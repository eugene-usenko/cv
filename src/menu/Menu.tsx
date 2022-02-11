import { MenuItem, MenuItemType } from './MenuItem'

interface MenuProps {
  items: MenuItemType[]
}

export const Menu = ({ items }: MenuProps) => {
  const jsx = items.map(item => <MenuItem key={item.name} {...item} />)
  return <div className='py-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7'>{jsx}</div>
}
