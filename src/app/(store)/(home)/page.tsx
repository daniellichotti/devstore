export default async function Home() {
  return (
    await new Promise((resolve) => setTimeout(resolve, 1000)),
    (<h1>Hello World</h1>)
  )
}
