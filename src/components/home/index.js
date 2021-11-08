import { Header } from "./style";
import Link from 'next/link'

export default function Home() {
    return (
        
            <Header>
                <h1>infoSéries</h1>

                <Link href="/about">About</Link>
            </Header>
        
    )
}
