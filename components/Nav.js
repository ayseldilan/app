import Link from "next/link";


export default function Nav() {
    return(
        <nav className="flex justify-between items-center py-10">
            <Link href="/">
                <button className="text-lg font-medium">Creative Minds</button>
            </Link>
            <ul className="flex items-center gap-10">
                <Link href={"/auth/login"}>
                    
                    Back to Home
                </Link>
            </ul>


        </nav>
    );
}