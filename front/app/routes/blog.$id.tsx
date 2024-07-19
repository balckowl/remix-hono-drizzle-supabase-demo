import { LoaderFunction, LoaderFunctionArgs, json } from "@remix-run/node"
import { Params, useLoaderData } from "@remix-run/react"

export const loader = async ({ params }: LoaderFunctionArgs) => {

    const { id } = params

    const res = await fetch(`http://localhost:3000/api/post/${id}`)

    const blog = await res.json()

    return json(blog)
}

const blogId = () => {

    const blog = useLoaderData<typeof loader>()

    console.log(blog)

    if(blog.length == 0){
        return <p>not found</p>
    }

    const { author, title, content } = blog[0]

    return (
        <div className="container">
            <div>{author}</div>
            <div>{title}</div>
            <div>{content}</div>
        </div>
    )
}

export default blogId