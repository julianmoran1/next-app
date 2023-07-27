import Link from 'next/link'
import { useRouter } from 'next/router'
import { CSSProperties } from 'react'

const style:CSSProperties = {
    color: "blue",
    textDecoration: "underline"
}

interface ActiveLinkProps {
    text: string,
    href: string
}

export const ActiveLink = ({ text, href }:ActiveLinkProps) => {
    const {asPath} = useRouter()

    return (
        <Link legacyBehavior href={href}>
            <a style={asPath === href ? style : {}}>{text}</a>
        </Link>
    )
}
