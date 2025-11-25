export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="min-h-screen backdrop-blur-3xl bg-white/10">
        <main className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Welcome to the Future
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Build something amazing with Next.js and modern web technologies
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg">
              Get Started
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 hover:bg-white/30 transition-all transform hover:-translate-y-2 shadow-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Lightning Fast
              </h3>
              <p className="text-white/80">
                Built with performance in mind. Experience blazing fast load
                times and smooth interactions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 hover:bg-white/30 transition-all transform hover:-translate-y-2 shadow-xl">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Beautiful Design
              </h3>
              <p className="text-white/80">
                Modern UI with stunning gradients and glass morphism effects
                that captivate users.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 hover:bg-white/30 transition-all transform hover:-translate-y-2 shadow-xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Easy to Use
              </h3>
              <p className="text-white/80">
                Simple, intuitive interface that makes building your next
                project a breeze.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80">Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/80">Users</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-white/80">Satisfaction</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
