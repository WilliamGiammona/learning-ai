// app/foundations/page.tsx
export default function FoundationsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <section id="#iterators">
        <h1 className="text-3xl font-bold mb-6">Iterating Over Data</h1>
        <p className="mb-4">
          Iterators let you stream things one bit at a time without storing
          everything into memory at once. This is useful for large datasets or
          when you want to process data in chunks.
        </p>
        <p className="mb-4">
          Python comes with a standard library called itertools to make it
          easier to work with iterators
        </p>
        <p className="mb-4">
          If you have an image as a flat list of 784 pixels, you can use the
          chunks function to group them into 28 rows of 28 pixels each:
        </p>

        <pre className="bg-gray-100 p-4 rounded mb-6">
          <code>{`def chunks(x, step):
        for i in range(0, len(x), step): yield x[i:i + step]

# Example: 784 pixels → 28x28 image
pixels = [0, 1, 2, 3, ..., 783]  # 784 pixel values
rows = list(chunks(pixels, 28))   # 28 rows of 28 pixels each`}</code>
        </pre>

        <p>
          Now <code className="bg-gray-200 px-1 rounded">rows[0]</code> contains
          pixels 0-27 (first row),{" "}
          <code className="bg-gray-200 px-1 rounded">rows[1]</code> contains
          pixels 28-55 (second row), and so on.
        </p>
      </section>
      <section id="Matrices" className="mt-12">
        <h1 className="text-3xl font-bold mb-6">Matrix From Scratch</h1>
        <p className="mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          dolorum sequi a nisi accusamus iure repudiandae magnam incidunt earum!
          Natus ex esse voluptatibus nam blanditiis autem sapiente quasi ut
          dolores.
        </p>
      </section>
    </div>
  );
}
