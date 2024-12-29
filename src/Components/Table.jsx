import React from 'react';

const Table = ({ exams }) => {
  return (
    <div className="container mx-auto p-5">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-700">
            <th className="w-1/3 px-4 py-2">Exam</th>
            <th className="w-1/3 px-4 py-2">Result</th>
            <th className="w-1/3 px-4 py-2">Year</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
            <tr key={exam.id} className="border-t border-gray-200">
              <td className="px-4 py-2">{exam.exam}</td>
              <td className="px-4 py-2">{exam.result}</td>
              <td className="px-4 py-2">{exam.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
