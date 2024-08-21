import React, { useState } from "react";

const JobApplicationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState(null);
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a backend
    console.log({
      fullName,
      email,
      phone,
      coverLetter,
      resume,
      termsAgreed,
    });
  };

  return (
    <div className="bg-transparent border-4 rounded-xl py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl text-white font-bold mb-6">
        Apply for this position
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="fullName"
            className="block font-medium text-gray-100 mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full backdrop-blur-sm p-3 text-white rounded-md shadow-sm  bg-gray-500/50 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-medium text-gray-100 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full backdrop-blur-sm p-3 text-white rounded-md shadow-sm  bg-gray-500/50 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block font-medium text-gray-100 mb-2"
          >
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full backdrop-blur-sm p-3 text-white rounded-md shadow-sm  bg-gray-500/50 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="coverLetter"
            className="block font-medium text-gray-100 mb-2"
          >
            Cover Letter *
          </label>
          <textarea
            id="coverLetter"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            required
            className="w-full backdrop-blur-sm p-3 text-white rounded-md shadow-sm  bg-gray-500/50 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="resume"
            className="block font-medium text-gray-100 mb-2"
          >
            Upload CV/Resume *
          </label>
          <input
            type="file"
            id="resume"
            accept=".pdf,.doc,.docx"
            // @ts-ignore
            onChange={(e) => setResume(e.target.files[0])}
            required
            className="w-full backdrop-blur-sm p-3 text-white rounded-md shadow-sm  bg-gray-500/50 sm:text-sm"
          />
          <p className="mt-2 text-sm text-gray-500">
            Allowed Type(s): .pdf, .doc, .docx
          </p>
        </div>
        <div>
          <label className="flex items-start">
            <input
              type="checkbox"
              checked={termsAgreed}
              onChange={(e) => setTermsAgreed(e.target.checked)}
              required
              className="h-4 w-4 mt-1 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <span className="ml-2 text-sm text-gray-100">
              By using this form you agree with the storage and handling of your
              data by this website. *
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-primary border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-primary/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
