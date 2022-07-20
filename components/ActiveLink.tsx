import { FC, CSSProperties } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

// cssProperties -> propiedades que acepta react
const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}

interface Props {
  text: string
  href: string
}

// fc -> functional component con props text y href
export const ActiveLink: FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter() // asPath is the current path

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  )
}
