import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <Link href={'/login'}>
                <button>Fazer login</button>
            </Link>
        </div>
    )
}
