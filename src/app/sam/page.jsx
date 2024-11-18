"use client";

const SamPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-4 max-w-[1280px] mx-auto">
        <div className="flex items-center">
          <img src="/borderplus-logo.svg" alt="BorderPlus" className="h-8" />
        </div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-[#4A5568] hover:text-[#2B6CB0] transition-colors">Candidates</a>
          <a href="#" className="text-[#4A5568] hover:text-[#2B6CB0] transition-colors">Companies</a>
          <a href="#" className="text-[#4A5568] hover:text-[#2B6CB0] transition-colors">About Us</a>
          <button className="px-6 py-2 text-[#2B6CB0] font-medium hover:bg-blue-50 rounded-md transition-colors">Signup</button>
          <button className="px-6 py-2 bg-[#2B6CB0] text-white rounded-md font-medium hover:bg-blue-700 transition-colors">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-[1280px] mx-auto px-8 py-16 flex items-center">
          <div className="w-1/2 pr-12">
            <span className="text-sm text-[#E53E3E]">01</span>
            <h1 className="text-[48px] leading-tight font-bold text-[#2D3748] mt-4 mb-6">
              Global Talent For<br />Skilled Service
            </h1>
            <p className="text-[#718096] text-lg mb-8 max-w-[480px]">
              Connecting healthcare professionals to a global pool of skilled professionals, ready to seamlessly integrate and elevate patient care.
            </p>
            <button className="px-8 py-3 bg-[#2B6CB0] text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <div className="flex gap-4 mt-4">
              <span className="text-sm text-[#E53E3E]">#GC512</span>
              <span className="text-sm text-[#E53E3E]">#71264</span>
            </div>
          </div>
          <div className="w-1/2">
            <img 
              src="/medical-team.jpg" 
              alt="Medical Team" 
              className="rounded-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <span className="text-sm text-[#E53E3E]">02</span>
          <h2 className="text-2xl font-bold text-[#2D3748] mt-4 mb-12">
            Excellence in Healthcare, Built for Global Needs.
          </h2>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                icon: "/icons/guidance.svg",
                title: "Full-Spectrum Guidance",
                description: "Handholding right from the first interview to the first day on the job."
              },
              {
                icon: "/icons/language.svg",
                title: "Innovative Language Training",
                description: "AI-powered speaking practice, integrated with medical terminology and cultural insights."
              },
              {
                icon: "/icons/transparent.svg",
                title: "Transparent & fair Processes",
                description: "We prioritize operational excellence, professionalism, and clear communication ensuring transparency in every step."
              },
              {
                icon: "/icons/talent.svg",
                title: "Top Talent",
                description: "A rigorous selection and training process to ensure that only the most skilled and well-prepared candidates are selected to our platform."
              },
              {
                icon: "/icons/operational.svg",
                title: "Operational excellence",
                description: "With a commitment to efficiency and quality, we ensure streamlined experience for both candidates and recruiters through well-structured processes."
              },
              {
                icon: "/icons/partnership.svg",
                title: "Long-Term partnership Commitment",
                description: "We are committed to building lasting relationships, providing ongoing support to build lasting trust and reliability to both talent and recruiters."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#2B6CB0] rounded-full flex items-center justify-center mb-6">
                  <img src={feature.icon} alt="" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2D3748] mb-3">{feature.title}</h3>
                <p className="text-[#718096] text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Beyond Borders Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[1280px] mx-auto px-8 flex items-center gap-12">
          <div className="flex-1">
            <span className="text-sm text-[#E53E3E]">03</span>
            <h2 className="text-3xl font-bold text-[#2D3748] mt-4 mb-6">
              Beyond Borders to Strengthen Your Healthcare Team
            </h2>
            <p className="text-[#718096] mb-8">
              We connect you with highly skilled, culturally adept healthcare professionals to meet your staffing needs across borders. Our rigorous selection and innovative training ensure top talent with language skills and medical expertise for emergent care.
            </p>
            <button className="px-8 py-3 bg-[#2B6CB0] text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
              Opportunities for Recruiters
            </button>
            <div className="flex items-center gap-4 mt-6">
              <span className="text-sm text-[#718096]">Trusted by leading healthcare institutions</span>
              <span className="w-1 h-1 bg-[#718096] rounded-full"></span>
              <span className="text-sm text-[#718096]">24/7 Support</span>
            </div>
          </div>
          <div className="w-[400px] h-[400px] rounded-full overflow-hidden">
            <img 
              src="/doctor-image.jpg" 
              alt="Healthcare Professional" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <span className="text-sm text-[#E53E3E]">04</span>
          <h2 className="text-3xl font-bold text-[#2D3748] mt-4 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-[#2D3748]">
                  Does Border Plus charge a fee for placement service?
                </h3>
                <button className="text-2xl text-[#2B6CB0]">-</button>
              </div>
              <p className="mt-4 text-[#718096]">
                No, BORDER PLUS does not charge candidates anything for placement. 
                Candidates can sign up and apply for jobs through our platform for free.
              </p>
            </div>
            {/* Add more FAQ items here */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2B6CB0] text-white py-12">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <img src="/borderplus-logo-white.svg" alt="BorderPlus" className="h-8 mb-6" />
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-200">
                <li>Companies</li>
                <li>Agents</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-200">
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-200">+91 8826062200 (India)</p>
              <p className="text-gray-200">info@borderplus.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SamPage;