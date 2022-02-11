import styles from './Footer.module.css'

interface FooterProps {
  text: string
}

export const Footer = ({ text }: FooterProps) => {
  //   return <footer className={'text-gray-500 py-2 italic text-l font-light'}>{text}</footer>
  return (
    <div className='pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7'>
      <p>{text}</p>
    </div>
  )
}
