import React, { useState } from 'react';
import { Users, ChevronDown, ChevronUp, Search } from 'lucide-react';

interface Department {
  id: number;
  name: string;
  staffCount: number;
  subDepartments: SubDepartment[];
}

interface SubDepartment {
  id: number;
  name: string;
  staffCount: number;
}

const PersonnelOverview: React.FC = () => {
  const [expandedDept, setExpandedDept] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const departments: Department[] = [
    {
      id: 1,
      name: "ฝ่ายบริหารทรัพยากร",
      staffCount: 45,
      subDepartments: [
        { id: 1, name: "งานบริหารงานทั่วไป", staffCount: 12 },
        { id: 2, name: "งานบุคลากร", staffCount: 8 },
        { id: 3, name: "งานการเงิน", staffCount: 15 },
        { id: 4, name: "งานพัสดุ", staffCount: 10 }
      ]
    },
    {
      id: 2,
      name: "ฝ่ายแผนงานและความร่วมมือ",
      staffCount: 35,
      subDepartments: [
        { id: 1, name: "งานวางแผนและงบประมาณ", staffCount: 10 },
        { id: 2, name: "งานศูนย์ข้อมูลสารสนเทศ", staffCount: 8 },
        { id: 3, name: "งานความร่วมมือ", staffCount: 7 },
        { id: 4, name: "งานวิจัยพัฒนานวัตกรรมและสิ่งประดิษฐ์", staffCount: 10 }
      ]
    },
    {
      id: 3,
      name: "ฝ่ายพัฒนากิจการนักเรียนนักศึกษา",
      staffCount: 40,
      subDepartments: [
        { id: 1, name: "งานกิจกรรมนักเรียนนักศึกษา", staffCount: 15 },
        { id: 2, name: "งานครูที่ปรึกษา", staffCount: 12 },
        { id: 3, name: "งานปกครอง", staffCount: 8 },
        { id: 4, name: "งานแนะแนวอาชีพ", staffCount: 5 }
      ]
    },
    {
      id: 4,
      name: "ฝ่ายวิชาการ",
      staffCount: 180,
      subDepartments: [
        { id: 1, name: "แผนกวิชาช่างก่อสร้าง", staffCount: 12 },
        { id: 2, name: "แผนกวิชาช่างโยธา", staffCount: 10 },
        { id: 3, name: "แผนกวิชาช่างเครื่องเรือนและตกแต่งภายใน", staffCount: 8 },
        { id: 4, name: "แผนกวิชาช่างสำรวจ", staffCount: 8 },
        { id: 5, name: "แผนกวิชาสถาปัตยกรรม", staffCount: 10 },
        { id: 6, name: "แผนกวิชาช่างยนต์", staffCount: 15 },
        { id: 7, name: "แผนกวิชาช่างกลโรงงาน", staffCount: 12 },
        { id: 8, name: "แผนกวิชาช่างเชื่อมโลหะ", staffCount: 8 },
        { id: 9, name: "แผนกวิชาช่างเทคนิคพื้นฐาน", staffCount: 10 },
        { id: 10, name: "แผนกวิชาช่างไฟฟ้า", staffCount: 15 },
        { id: 11, name: "แผนกวิชาช่างอิเล็กทรอนิกส์", staffCount: 12 },
        { id: 12, name: "แผนกวิชาเครื่องทำความเย็นและปรับอากาศ", staffCount: 8 },
        { id: 13, name: "แผนกวิชาเทคโนโลยีสารสนเทศ", staffCount: 10 },
        { id: 14, name: "แผนกวิชาสามัญสัมพันธ์", staffCount: 15 },
        { id: 15, name: "แผนกวิชาเทคโนโลยีปิโตรเลียม", staffCount: 8 },
        { id: 16, name: "แผนกวิชาเทคนิคพลังงาน", staffCount: 8 },
        { id: 17, name: "แผนกวิชาการจัดการโลจิสติกส์ซัพพลายเชน", staffCount: 6 },
        { id: 18, name: "แผนกวิชาเทคนิคควบคุมระบบขนส่งทางราง", staffCount: 5 },
        { id: 19, name: "แผนกวิชาเมคคาทรอนิกส์และหุ่นยนต์", staffCount: 10 }
      ]
    }
  ];

  const totalStaff = departments.reduce((acc, dept) => acc + dept.staffCount, 0);
  const totalDepartments = departments.reduce((acc, dept) => acc + dept.subDepartments.length, 0);

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.subDepartments.some(subDept => 
      subDept.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-purple-100 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-purple-800 mb-2">ข้อมูลบุคลากร</h1>
          <div className="flex items-center gap-2">
            <Users className="text-purple-600" />
            <span className="text-lg">จำนวนบุคลากรทั้งหมด: {totalStaff} คน</span>
          </div>
        </div>
        <div className="bg-purple-100 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-800 mb-2">แผนกและงาน</h2>
          <div className="flex items-center gap-2">
            <Users className="text-purple-600" />
            <span className="text-lg">จำนวนแผนกและงานทั้งหมด: {totalDepartments} แผนก</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6 relative">
        <div className="relative">
          <input
            type="text"
            placeholder="ค้นหาแผนกหรืองาน..."
            className="w-full p-3 pl-10 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-purple-400" size={20} />
        </div>
      </div>

      {/* Departments List */}
      <div className="grid gap-6">
        {filteredDepartments.map((dept) => (
          <div key={dept.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div 
              className="bg-purple-600 p-4 flex justify-between items-center cursor-pointer"
              onClick={() => setExpandedDept(expandedDept === dept.id ? null : dept.id)}
            >
              <div className="text-white">
                <h2 className="text-xl font-semibold">{dept.name}</h2>
                <p className="text-purple-100">
                  บุคลากรทั้งหมด {dept.staffCount} คน | {dept.subDepartments.length} แผนก/งาน
                </p>
              </div>
              {expandedDept === dept.id ? 
                <ChevronUp className="text-white" /> : 
                <ChevronDown className="text-white" />
              }
            </div>
            
            {expandedDept === dept.id && (
              <div className="p-4">
                <div className="grid gap-4">
                  {dept.subDepartments.map((subDept) => (
                    <div 
                      key={subDept.id} 
                      className="bg-purple-50 p-4 rounded-lg flex justify-between items-center"
                    >
                      <span className="text-purple-800">{subDept.name}</span>
                      <span className="bg-purple-200 px-3 py-1 rounded-full text-purple-800">
                        {subDept.staffCount} คน
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonnelOverview;