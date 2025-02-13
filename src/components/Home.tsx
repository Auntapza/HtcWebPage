
const CollegeWebsite = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">ยินดีต้อนรับสู่วิทยาลัยเทคนิคหาดใหญ่</h1>
          <p className="text-xl">สร้างอนาคต พัฒนาความรู้ สู่ความสำเร็จ</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* News Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-700 mb-6">ข่าวประชาสัมพันธ์</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img 
                    src="/api/placeholder/400/200" 
                    alt="news" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">ข่าวประชาสัมพันธ์ {item}</h3>
                  <p className="text-gray-600">รายละเอียดข่าวประชาสัมพันธ์...</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-700 mb-6">ลิงก์ด่วน</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {['ระบบทะเบียน', 'ตารางเรียน', 'ปฏิทินการศึกษา'].map((item) => (
              <a href="https://std2018.vec.go.th/web/" target="blank" key={item} className="bg-white rounded-lg shadow-md p-4 text-center hover:bg-purple-50 cursor-pointer">
                <h3 className="font-bold text-purple-700">{item}</h3>
              </a>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
};

export default CollegeWebsite;