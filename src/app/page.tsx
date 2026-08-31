import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="bg-primary text-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-primary text-xs shadow-inner">
            NITP
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-serif text-white tracking-wide">
              National Institute of Technology Patna
            </h1>
            <p className="text-sm font-light text-gray-200">Convocation Digital Platform</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="#" className="hover:text-accent transition-colors">Programme</Link>
          <Link href="#" className="hover:text-accent transition-colors">Dignitaries</Link>
          <Link href="#" className="hover:text-accent transition-colors">Graduates</Link>
          <Link href="#" className="hover:text-accent transition-colors">Awards</Link>
          <Link href="#" className="bg-accent text-primary px-4 py-2 rounded-md hover:bg-accent-dark transition-colors">
            Student Login
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="bg-primary-light text-white py-20 px-6 text-center shadow-inner relative overflow-hidden">
          {/* subtle background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-accent text-lg uppercase tracking-widest font-bold mb-4">December 27, 2025</h2>
            <h3 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white drop-shadow-md">
              XIV Convocation
            </h3>
            <p className="text-lg md:text-xl text-gray-100 font-light max-w-2xl mx-auto mb-10">
              Honoring the achievements, dedication, and excellence of our graduating class. Join us in celebrating a significant milestone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="bg-accent text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-accent-dark hover:scale-105 transition-all">
                Search Graduate Directory
              </button>
              <button className="bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-all">
                Event Schedule
              </button>
            </div>
          </div>
        </section>

        {/* Highlights Ticker */}
        <div className="bg-foreground text-white py-3 px-6 text-sm font-medium flex justify-center items-center shadow-md">
          <span className="bg-accent text-primary px-2 py-1 rounded text-xs font-bold mr-3 uppercase">Notice</span>
          <span>Online registration for degree recipients closes on December 20, 2025. Please complete verification via the Student Portal.</span>
        </div>

        {/* Key Information Cards */}
        <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-primary hover:shadow-xl transition-shadow">
            <h4 className="font-serif text-2xl mb-3">Chief Guest</h4>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              We are honored to welcome Shri Nitish Kumar, Hon'ble Chief Minister of Bihar, as the Chief Guest for the 14th Convocation.
            </p>
            <Link href="#" className="text-primary font-bold hover:underline text-sm flex items-center">
              Read Profile &rarr;
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-accent hover:shadow-xl transition-shadow">
            <h4 className="font-serif text-2xl mb-3 text-primary">Venue Details</h4>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Main Campus, NIT Patna<br/>
              Ashok Rajpath, Mahendru, Patna<br/>
              Bihar 800005
            </p>
            <Link href="#" className="text-primary font-bold hover:underline text-sm flex items-center">
              View Map & Guidelines &rarr;
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-primary hover:shadow-xl transition-shadow">
            <h4 className="font-serif text-2xl mb-3">Live Webcast</h4>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Family and friends unable to attend in person can watch the entire ceremony broadcast live on our official channels.
            </p>
            <Link href="#" className="text-primary font-bold hover:underline text-sm flex items-center">
              Join Stream &rarr;
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-gray-400 py-10 px-6 text-sm text-center">
        <div className="max-w-4xl mx-auto border-b border-gray-700 pb-6 mb-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-bold text-white text-lg">NIT Patna Convocation Cell</p>
            <p>For support: convocation@nitp.ac.in</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-accent transition-colors">Admin Portal</Link>
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Use</Link>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} National Institute of Technology Patna. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
