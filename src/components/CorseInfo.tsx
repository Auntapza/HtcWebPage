import { useState } from "react";

type Department = {
  name: string;
  link: string;
  description: string;
};

const DepartmentList = () => {
  const [expandedDept, setExpandedDept] = useState<number | null>(null);

  const departments: Department[] = [
    {
      name: "แผนกวิชาช่างก่อสร้าง",
      link: "htc1",
      description: "มุ่งเน้นการเรียนการสอนด้านการก่อสร้างอาคาร การประมาณราคา การควบคุมงานก่อสร้าง และการออกแบบโครงสร้างพื้นฐาน"
    },
    {
      name: "แผนกวิชาช่างโยธา",
      link: "htc2",
      description: "เน้นการศึกษาด้านวิศวกรรมโยธา การออกแบบและก่อสร้างโครงสร้างพื้นฐาน ถนน สะพาน และระบบสาธารณูปโภค"
    },
    {
      name: "แผนกวิชาช่างเครื่องเรือนและตกแต่งภายใน",
      link: "htc3",
      description: "สอนการออกแบบและผลิตเครื่องเรือน การตกแต่งภายใน และการใช้เทคโนโลยีในการผลิตเฟอร์นิเจอร์"
    },
    {
      name: "แผนกวิชาช่างสำรวจ",
      link: "htc4",
      description: "เรียนรู้เกี่ยวกับการสำรวจพื้นที่ การทำแผนที่ การใช้เครื่องมือสำรวจสมัยใหม่ และระบบ GPS"
    },
    {
      name: "แผนกวิชาสถาปัตยกรรม",
      link: "htc5",
      description: "มุ่งเน้นการออกแบบสถาปัตยกรรม การเขียนแบบ การจำลองอาคาร 3 มิติ และการออกแบบภูมิทัศน์"
    },
    {
      name: "แผนกวิชาช่างยนต์",
      link: "htc6",
      description: "สอนเกี่ยวกับระบบเครื่องยนต์ การซ่อมบำรุง การวิเคราะห์ปัญหา และเทคโนโลยียานยนต์สมัยใหม่"
    },
    {
      name: "แผนกวิชาช่างกลโรงงาน",
      link: "htc7",
      description: "เรียนรู้การใช้เครื่องมือกล การผลิตชิ้นส่วน การเขียนแบบเครื่องกล และการควบคุมเครื่องจักร CNC"
    },
    {
      name: "แผนกวิชาช่างเชื่อมโลหะ",
      link: "htc8",
      description: "สอนเทคนิคการเชื่อมโลหะประเภทต่างๆ การตรวจสอบงานเชื่อม และการออกแบบโครงสร้างโลหะ"
    },
    {
      name: "แผนกวิชาช่างเทคนิคพื้นฐาน",
      link: "htc9",
      description: "เรียนรู้พื้นฐานงานช่างทุกแขนง การใช้เครื่องมือพื้นฐาน และความปลอดภัยในการทำงาน"
    },
    {
      name: "แผนกวิชาช่างไฟฟ้า",
      link: "htc10",
      description: "ศึกษาระบบไฟฟ้า การติดตั้ง การซ่อมบำรุง และการควบคุมระบบไฟฟ้าในอาคารและโรงงาน"
    },
    {
      name: "แผนกวิชาช่างอิเล็กทรอนิกส์",
      link: "htc11",
      description: "เน้นการเรียนรู้ด้านวงจรอิเล็กทรอนิกส์ การซ่อมอุปกรณ์ และการพัฒนาระบบควบคุมอัตโนมัติ"
    },
    {
      name: "แผนกวิชาเครื่องทำความเย็นและปรับอากาศ",
      link: "htc13",
      description: "สอนการติดตั้ง ซ่อมบำรุงระบบปรับอากาศและเครื่องทำความเย็นในอาคารและอุตสาหกรรม"
    },
    {
      name: "แผนกวิชาเทคโนโลยีสารสนเทศ",
      link: "ithtc",
      description: "เรียนรู้การพัฒนาซอฟต์แวร์ ระบบเครือข่าย การจัดการฐานข้อมูล และความมั่นคงปลอดภัยทางไซเบอร์"
    },
    {
      name: "แผนกวิชาสามัญสัมพันธ์",
      link: "htc16",
      description: "สอนวิชาพื้นฐานทั่วไป ภาษา คณิตศาสตร์ วิทยาศาสตร์ และทักษะชีวิต"
    },
    {
      name: "แผนกวิชาเทคโนโลยีปิโตรเลียม",
      link: "htc17",
      description: "ศึกษาเกี่ยวกับการผลิต การกลั่น และการขนส่งผลิตภัณฑ์ปิโตรเลียม"
    },
    {
      name: "แผนกวิชาเทคนิคพลังงาน",
      link: "htc18",
      description: "เรียนรู้เกี่ยวกับพลังงานทดแทน การอนุรักษ์พลังงาน และการจัดการพลังงานในอุตสาหกรรม"
    },
    {
      name: "แผนกวิชาการจัดการโลจิสติกส์ซัพพลายเชน",
      link: "htc19",
      description: "ศึกษาการจัดการขนส่ง คลังสินค้า และการจัดการห่วงโซ่อุปทานในธุรกิจสมัยใหม่"
    },
    {
      name: "แผนกวิชาเทคนิคควบคุมระบบขนส่งทางราง",
      link: "htc20",
      description: "เรียนรู้ระบบการขนส่งทางราง การควบคุมรถไฟ และการซ่อมบำรุงระบบราง"
    },
    {
      name: "แผนกวิชาเมคคาทรอนิกส์และหุ่นยนต์",
      link: "htc21",
      description: "สอนการออกแบบและควบคุมระบบอัตโนมัติ หุ่นยนต์อุตสาหกรรม และระบบการผลิตอัจฉริยะ"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">
        แผนกวิชาที่เปิดสอน
      </h1>
      
      <div className="space-y-4">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="border border-purple-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
          >
            <div
              className="cursor-pointer p-4 bg-white hover:bg-purple-50 transition-colors duration-200"
              onClick={() => setExpandedDept(expandedDept === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  <h2 className="text-lg font-semibold text-purple-900">
                    {dept.name}
                  </h2>
                </div>
                <button className="text-purple-600">
                  {expandedDept === index ? '▼' : '▶'}
                </button>
              </div>
            </div>
            
            {expandedDept === index && (
              <div className="p-4 bg-purple-50 border-t border-purple-100">
                <p className="text-gray-700 mb-3">{dept.description}</p>
                <a
                  href={`http://www.htc.ac.th/${dept.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors duration-200"
                >
                  เยี่ยมชมแผนก
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentList;