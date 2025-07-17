// app/foundations/page.tsx
export default function FoundationsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Chunking Image Pixels</h1>

      <p className="mb-4">
        If you have an image as a flat list of 784 pixels, you can use the
        chunks function to group them into 28 rows of 28 pixels each:
      </p>

      <pre className="bg-gray-100 p-4 rounded mb-6">
        <code>{`def chunks(x, sz):
    for i in range(0, len(x), sz): yield x[i:i+sz]

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
    </div>
  );
}
