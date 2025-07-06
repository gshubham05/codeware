"use client";

import Link from "next/link";
import { useState } from "react";
import courseStudents from "./data";

const ITEMS_PER_PAGE = 8;

export default function CourseStudentsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(courseStudents.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentStudents = courseStudents.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <main className="bg-gradient-to-br from-blue-800 to-indigo-900 min-h-screen text-white mt-20">
      {/* Hero */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Courses at <span className="text-purple-300">Codeware IT</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
          Explore our career-oriented courses designed for students and learners
          to build strong foundations in development and IT. Learn from mentors
          and get certified.
        </p>
        <Link href="/contact">
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition">
            Enroll Now
          </button>
        </Link>
      </section>

      {/* Students Section with Pagination */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <h2 className="text-4xl font-extrabold text-center mb-4 tracking-tight">
          Meet Our <span className="text-purple-300">Course Students</span>
        </h2>
        <p className="text-center text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          These students completed specialized skill courses with us — some are
          now placed in tech companies!
        </p>

        {/* Card Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentStudents.map((student) => (
            <Link href={`/Students/${student.id}`} key={student.id}>
              <div
                className={`bg-white rounded-xl shadow hover:shadow-xl transition-all overflow-hidden border-2 h-[30rem] flex flex-col justify-between ${
                  student.placed ? "border-green-500" : "border-transparent"
                }`}
              >
                <img
                  src={student.image}
                  alt={student.name}
                  onError={(e) => (e.currentTarget.src = "/intern/default.jpg")}
                  className="w-full h-[19rem] object-cover"
                />

                <div className="py-4 px-4 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {student.name}
                    </h3>
                    <p className="text-sm text-gray-500">{student.role}</p>
                    <p className="text-xs text-gray-400">{student.college}</p>

                    {student.placed && (
                      <div className="mt-2">
                        <span className="inline-block text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                          🎉 Placed
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-2">
                    <span className="text-sm text-blue-600 font-medium hover:underline">
                      View Profile →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                currentPage === i + 1
                  ? "bg-white text-blue-700"
                  : "bg-gray-700 text-white hover:bg-gray-600"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
