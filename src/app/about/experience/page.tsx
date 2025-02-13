import Link from 'next/link';

export default function Experience() {
  return (
    <div className="min-h-screen p-8">
      <Link href="/" className="text-blue-500 hover:text-blue-700 mb-8 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Latest Position</h2>
          <h3 className="text-xl mb-2">Company Name</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Description of your role and responsibilities
          </p>
          <div className="text-sm text-gray-500">2020 - Present</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Previous Position</h2>
          <h3 className="text-xl mb-2">Company Name</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Description of your role and responsibilities
          </p>
          <div className="text-sm text-gray-500">2018 - 2020</div>
        </div>
      </div>
    </div>
  );
} 