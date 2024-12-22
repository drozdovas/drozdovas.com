export default function About() {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="prose prose-invert">
          <p className="text-xl mb-6">
            Detailed introduction about yourself, your background, and what you do.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Experience</h2>
          <p>
            Information about your professional experience...
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Skills</h2>
          <p>
            Information about your technical skills and expertise...
          </p>
        </div>
      </div>
    )
  }