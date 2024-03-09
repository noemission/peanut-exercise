export default function Related({
  related,
}: {
  related: {
    text: string;
    url: string;
  }[];
}) {
  return (
    <nav title="related" className="md:order-3">
      <p className="text-lg font-black">In this article: 📝</p>
      <ul className="list-disc mt-4 pl-6 text-peanut-red">
        {related.map(({ text, url }) => (
          <li key={url} className="pb-1">
            <a className="underline" href={url}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
