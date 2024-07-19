import { ActionFunctionArgs, json, redirect } from "@remix-run/node"
import { Button } from "~/@/components/ui/button"


export const action = async ({ request }: ActionFunctionArgs) => {

    const formData = await request.formData()
    const author = String(formData.get("author"))
    const title = String(formData.get("title"))
    const content = String(formData.get("content"))

    await fetch("http://localhost:3000/api/post", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ author: author, title: title, content: content })
    })

    return redirect("/")
}

const BlogCreate = () => {
    return (
        <div className="container">
            <form method="post" className="flex flex-col gap-3">
                <div >
                    <label htmlFor="author" className="text-3xl">Author</label>
                    <div>
                        <input type="text" placeholder="author" name="author" id="author" className="border-black border p-2 focus:outline-none rounded-[10px] w-[350px]" />
                    </div>
                </div>
                <div>
                    <label htmlFor="title" className="text-3xl">title</label>
                    <div>
                        <input type="text" placeholder="title" name="title" id="title" className="border-black border p-2 focus:outline-none rounded-[10px] w-[350px]" />
                    </div>
                </div>
                <div>
                    <label htmlFor="content" className="text-3xl">content</label>
                    <div>
                        <textarea placeholder="content" name="content" id="content" className="border-black border p-2 focus:outline-none rounded-[10px] resize-none w-[350px] h-[200px]"></textarea>
                    </div>
                </div>
                <Button className="w-max">送信</Button>
            </form>
        </div>
    )
}

export default BlogCreate