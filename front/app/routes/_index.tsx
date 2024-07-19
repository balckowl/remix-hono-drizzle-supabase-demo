import { Button } from "~/@/components/ui/button";
import { LoaderFunction, MetaFunction, json } from "@remix-run/node";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/@/components/ui/card";
import { Link, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async () => {
  const res = await fetch("http://localhost:3000/api/post")

  const allBlogs = await res.json()

  return json(allBlogs)
}

export default function Index() {

  const allBlogs = useLoaderData<typeof loader>()

  return (
    <div className="container">
      <div className="flex flex-col gap-3">
        {allBlogs.map((blog: TBlog) => (
          <Card key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription>{blog.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{blog.content}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
