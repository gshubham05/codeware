import courseStudents from "../../data";
import { notFound } from "next/navigation";

export default function CertificatePage({ params }) {
  const students = courseStudents.find((s) => s.id === params.id);
  if (!students) return notFound();

  const certificateUrl = `/certificates/${students.id}.jpg`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-300 py-10 px-4 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white p-6 md:p-10 rounded-2xl shadow-2xl border border-gray-200">
        <div className="bg-gray-50 p-4 md:p-6 rounded-xl">
          <img
            src={certificateUrl}
            alt={`${students.name}'s Certificate`}
            className="w-full object-contain rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
