import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">ติดต่อเรา</h3>
              <div className="flex items-center mb-2">
                <Phone className="h-4 w-4 mr-2" />
                <span>โทร: XXX-XXX-XXXX</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">เมนูลัด</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-purple-200">เกี่ยวกับเรา</a></li>
                <li><a href="#contact" className="hover:text-purple-200">ติดต่อเรา</a></li>
                <li><a href="#sitemap" className="hover:text-purple-200">แผนผังเว็บไซต์</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">ติดตามเรา</h3>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a href="#facebook" className="hover:text-purple-200">Facebook</a>
                <a href="#twitter" className="hover:text-purple-200">Twitter</a>
                <a href="#youtube" className="hover:text-purple-200">YouTube</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center border-t border-purple-700 pt-8">
            <p>© 2025 วิทยาลัยเทคนิคหาดใหญ่. สงวนลิขสิทธิ์.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;