import students from "../../data";
import { notFound } from "next/navigation";

export default function CertificatePage({ params }) {
  const intern = students.find((s) => s.id === params.id);
  if (!intern) return notFound();

  const certificateUrl = `/certificates/${intern.id}.jpg`;

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">
      <div className="w-full max-w-5xl shadow-xl rounded-xl overflow-hidden">
        <img
          src={certificateUrl}
          alt={`${intern.name}'s Certificate`}
          className="w-full object-contain"
        />
      </div>
    </main>
  );
}
