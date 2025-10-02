import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/30 dark:via-transparent dark:to-purple-950/30"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 dark:bg-blue-800/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-32 h-32 bg-purple-200/30 dark:bg-purple-800/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-teal-200/30 dark:bg-teal-800/30 rounded-full blur-lg animate-pulse delay-500"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let's connect and discuss opportunities to work together
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Email</h3>
              <a 
                href="mailto:contact@example.com"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                defaultface0@gmail.com
              </a>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Phone</h3>
              <a 
                href="tel:+15551234567"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                +63 909 433 8845
              </a>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">Philippines, Eastern Visayas, Southern leyte, Maasin City</p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with 
              passionate teams. Whether you have a specific project in mind or 
              just want to explore possibilities, I'd love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}