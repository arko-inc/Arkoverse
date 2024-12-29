import React from 'react';

const Table = ({ exams }) => {
  return (
    <div className="container w-full border border-gray-200 rounded-3xl justify-center">
      <table className="min-w-full backdrop-blur-md border border-gray-200 rounded-3xl overflow-hidden">
        <thead>
          <tr className="w-full backdrop-blur-sm text-gray-100 rounded-t-3xl">
            <th className="w-1/3 px-4 py-2 border-b border-gray-200">Exam</th>
            <th className="w-1/3 px-4 py-2 border-b border-gray-200">Year</th>
            <th className="w-1/3 px-4 py-2 border-b border-gray-200">Result</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
            <tr key={exam.id} className="border-t border-gray-200 last:rounded-b-3xl text-center">
              <td className="px-4 py-2 border-r border-gray-200">{exam.exam}</td>
              <td className="px-4 py-2 border-r border-gray-200">{exam.year}</td>
              <td className="px-4 py-2">{exam.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
