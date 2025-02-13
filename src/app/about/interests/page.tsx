import Link from "next/link";

export default function Interests() {
  return (
    <div className="min-h-screen p-8">
      <Link
        href="/"
        className="text-blue-500 hover:text-blue-700 mb-8 inline-block"
      >
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-8">Interests & Hobbies</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Technical Interests</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>Web Development</li>
            <li>Machine Learning</li>
            <li>Mobile App Development</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Personal Hobbies</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>Photography</li>
            <li>Reading</li>
            <li>Traveling</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
