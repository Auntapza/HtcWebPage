import React from 'react';

import somsak from '../assets/Screenshot 2025-02-13 100252.png'
import ruchda from '../assets/Screenshot 2025-02-13 100335.png'
import sunya from '../assets/Screenshot 2025-02-13 100419.png'
import charin from '../assets/Screenshot 2025-02-13 100517.png'
import amunya from '../assets/Screenshot 2025-02-13 100543.png'

interface Administrator {
  id: number;
  name: string;
  position: string;
  email: string;
  department?: string;
  image?: string
}

const AdminCard: React.FC<{ admin: Administrator; isMain?: boolean }> = ({ admin, isMain = false }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${isMain ? 'max-w-md mx-auto' : ''}`}>
      <div className="flex flex-col items-center">
        <img 
          src={admin.image} 
          alt={admin.name} 
          className="w-48 h-48 rounded-lg object-cover mb-4"
        />
        <div className="bg-purple-50 p-4 rounded-lg w-full">
          <h3 className="text-purple-900 font-bold text-lg text-center">{admin.name}</h3>
          <p className="text-purple-700 text-center mt-2">{admin.position}</p>
          {admin.department && (
            <p className="text-purple-600 text-center mt-1">{admin.department}</p>
          )}
          <p className="text-gray-600 text-center mt-2">{admin.email}</p>
        </div>
      </div>
    </div>
  );
};

const AdminPage: React.FC = () => {
  const mainAdmin: Administrator = {
    id: 1,
    name: "นายสมศักดิ์ ไชยโสดา",
    position: "ผู้อำนวยการ",
    email: "somsak.teep19@gmail.com",
    department: "วิทยาลัยเทคนิคหาดใหญ่",
    image: somsak
  };

  const deputyAdmins: Administrator[] = [
    {
      id: 2,
      name: "นางสาว รัชฎา เสพมงคลเลิศ",
      position: "รองผู้อำนวยการ",
      department: "ฝ่ายแผนงานและความร่วมมือ",
      email: "Pat-yo@hotmail.com",
      image: ruchda
    },
    {
      id: 3,
      name: "นาย สัญญา ชยมงศ์",
      position: "รองผู้อำนวยการ",
      department: "ฝ่ายบริหารทรัพยากร",
      email: "Khayaiwong@gmail.com",
      image: sunya
    },
    {
      id: 4,
      name: "นาย ชรินทร์ วิตตรี",
      position: "รองผู้อำนวยการ",
      department: "ฝ่ายพัฒนาการศึกษา",
      email: "Charin6493@gmail.com",
      image: charin
    },
    {
      id: 5,
      name: "นางสาวอมัญญา เรืองเพ็ง",
      position: "รองผู้อำนวยการ",
      department: "ฝ่ายวิชาการ",
      email: "r.jirawan@hotmail.com",
      image: amunya
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <AdminCard admin={mainAdmin} isMain={true} />
      </div>
      
      <h2 className="text-2xl text-purple-800 font-bold text-center mb-8">
        รองผู้อำนวยการ
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {deputyAdmins.map((admin) => (
          <AdminCard key={admin.id} admin={admin} />
        ))}
      </div>
    </div>
  );
};

export default AdminPage;