import { Link } from "@remix-run/react"
import { Button } from "~/@/components/ui/button"

const Header = () => {
    return (
        <header className="h-[100px]">
            <div className="container flex justify-between items-center h-full">
                <h1 className="text-3xl font-bold">BLOG</h1>
                <Button>
                    <Link to="/blog/create">ブログを書く+</Link>
                </Button>
            </div>
        </header>
    )
}

export default Header