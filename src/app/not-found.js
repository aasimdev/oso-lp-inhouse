import Link from "next/link"

const Custom404 = () => {
  return (
    <section className="pt-14 sm:pt-16 max-w-3xl px-6 mx-auto">
      <div className="space-y-4">
        <h1 className="text-black text-[56px] font-bold">Oops!</h1>
        <p className="text-gray-800 text-[32px] font-light leading-10">We can’t seem to find the page you’re looking for.</p>
        <span className="text-gray-500 text-2xl font-light block">Error 404</span>
      </div>
      <div className="mt-6">
        <p className="text-gray-800 text-2xl font-bold">Here are some helpful links instead:</p>
        <div className="mt-4 space-y-2 flex flex-col">
          <Link href="/" className="text-purple text-base font-semibold">Home</Link>
          <Link href="/resource" className="text-purple text-base font-semibold">How people use OSO</Link>
          <Link href="https://learn.oso.ai/" target="_blank" className="text-purple text-base font-semibold">Knowledgeable </Link>
          <Link href="/search" className="text-purple text-base font-semibold">Search</Link>
          <Link href="/chat" className="text-purple text-base font-semibold">Chat</Link>
          <Link href="/news" className="text-purple text-base font-semibold">News</Link>
          <Link href="/pricing" className="text-purple text-base font-semibold">Pricing</Link>
          <Link href="https://blog.oso.ai/" target="_blank" className="text-purple text-base font-semibold">Blog</Link>
        </div>
      </div>
    </section>
  )
}

export default Custom404