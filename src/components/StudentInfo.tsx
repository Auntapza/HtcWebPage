import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, GraduationCap, BookOpen } from 'lucide-react';

// ข้อมูลสมมติสำหรับการแสดงผล
const studentData = [
  { department: 'ช่างก่อสร้าง', ปวช: 80, ปวส: 60 },
  { department: 'ช่างโยธา', ปวช: 75, ปวส: 55 },
  { department: 'เครื่องเรือนและตกแต่งภายใน', ปวช: 70, ปวส: 50 },
  { department: 'ช่างสำรวจ', ปวช: 65, ปวส: 45 },
  { department: 'สถาปัตยกรรม', ปวช: 85, ปวส: 65 },
  { department: 'ช่างยนต์', ปวช: 120, ปวส: 90 },
  { department: 'ช่างกลโรงงาน', ปวช: 100, ปวส: 80 },
  { department: 'ช่างเชื่อมโลหะ', ปวช: 70, ปวส: 50 },
  { department: 'ช่างเทคนิคพื้นฐาน', ปวช: 60, ปวส: 0 },
  { department: 'ช่างไฟฟ้า', ปวช: 110, ปวส: 85 },
  { department: 'ช่างอิเล็กทรอนิกส์', ปวช: 95, ปวส: 75 },
  { department: 'เครื่องทำความเย็นและปรับอากาศ', ปวช: 85, ปวส: 65 },
  { department: 'เทคโนโลยีพลังงาน', ปวช: 0, ปวส: 70 },
  { department: 'การจัดการโลจิสติกส์', ปวช: 0, ปวส: 85 },
  { department: 'เทคโนโลยีระบบควบคุมขนส่งระบบราง', ปวช: 0, ปวส: 75 },
  { department: 'เมคคาทรอนิกส์และหุ่นยนต์', ปวช: 90, ปวส: 70 }
];

const COLORS = ['#9333ea', '#c084fc'];

const StudentStatistics = () => {
  const totalStudents = studentData.reduce((acc, curr) => acc + curr.ปวช + curr.ปวส, 0);
  const totalปวช = studentData.reduce((acc, curr) => acc + curr.ปวช, 0);
  const totalปวส = studentData.reduce((acc, curr) => acc + curr.ปวส, 0);

  // ข้อมูลสำหรับ Pie Chart
  const pieData = [
    { name: 'ปวช.', value: totalปวช },
    { name: 'ปวส.', value: totalปวส }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* หัวข้อหลัก */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-700 mb-2">ข้อมูลนักเรียน/นักศึกษา</h1>
          <p className="text-gray-600">สถิตินักเรียนนักศึกษาแยกตามระดับการศึกษาและแผนก</p>
        </div>

        {/* สรุปจำนวนรวม */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-gray-600">จำนวนนักศึกษาทั้งหมด</p>
                <h3 className="text-2xl font-bold text-purple-700">{totalStudents.toLocaleString()} คน</h3>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-gray-600">ระดับ ปวช.</p>
                <h3 className="text-2xl font-bold text-purple-700">{totalปวช.toLocaleString()} คน</h3>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-gray-600">ระดับ ปวส.</p>
                <h3 className="text-2xl font-bold text-purple-700">{totalปวส.toLocaleString()} คน</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Pie Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-purple-700 mb-4">สัดส่วนนักศึกษา</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((e, index) => (
                      <Cell key={`cell-${e}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-purple-700 mb-4">จำนวนนักศึกษาแยกตามแผนก</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={studentData} layout="vertical" margin={{ left: 150 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="department" width={150} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="ปวช" fill="#9333ea" name="ระดับ ปวช." />
                  <Bar dataKey="ปวส" fill="#c084fc" name="ระดับ ปวส." />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* ตารางข้อมูล */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-purple-700 text-white">
              <tr>
                <th className="py-3 px-4 text-left">แผนก</th>
                <th className="py-3 px-4 text-center">ปวช.</th>
                <th className="py-3 px-4 text-center">ปวส.</th>
                <th className="py-3 px-4 text-center">รวม</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {studentData.map((item) => (
                <tr key={item.department} className="hover:bg-purple-50">
                  <td className="py-3 px-4">{item.department}</td>
                  <td className="py-3 px-4 text-center">{item.ปวช}</td>
                  <td className="py-3 px-4 text-center">{item.ปวส}</td>
                  <td className="py-3 px-4 text-center">{item.ปวช + item.ปวส}</td>
                </tr>
              ))}
              <tr className="bg-purple-50 font-bold">
                <td className="py-3 px-4">รวมทั้งหมด</td>
                <td className="py-3 px-4 text-center">{totalปวช}</td>
                <td className="py-3 px-4 text-center">{totalปวส}</td>
                <td className="py-3 px-4 text-center">{totalStudents}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentStatistics;