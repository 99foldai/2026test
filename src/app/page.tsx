export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-800">
            Welcome to Your App
          </h1>
          <p className="text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
            Built with Next.js, styled with your brand colors, and ready to customize.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn-primary">
              Get Started
            </button>
            <button className="btn-outline">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-primary-800">Fast</h3>
              <p className="text-neutral-700">
                Built on Next.js for optimal performance and lightning-fast page loads.
              </p>
            </div>
            
            <div className="card">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3 text-primary-800">Styled</h3>
              <p className="text-neutral-700">
                Pre-configured with your brand colors and ready-to-use components.
              </p>
            </div>
            
            <div className="card">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3 text-primary-800">Deploy</h3>
              <p className="text-neutral-700">
                One-click deployment to Vercel with automatic GitHub integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Showcase */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Brand Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-full h-24 bg-primary-800 rounded-lg mb-3 shadow-md"></div>
              <p className="text-sm font-medium text-neutral-700">Primary</p>
              <p className="text-xs text-neutral-500">#284e36</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 bg-neutral-900 rounded-lg mb-3 shadow-md"></div>
              <p className="text-sm font-medium text-neutral-700">Button</p>
              <p className="text-xs text-neutral-500">#151515</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 bg-card-300 rounded-lg mb-3 shadow-md border border-card-400"></div>
              <p className="text-sm font-medium text-neutral-700">Card</p>
              <p className="text-xs text-neutral-500">#F3F1DA</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 bg-neutral-100 rounded-lg mb-3 shadow-md border border-neutral-300"></div>
              <p className="text-sm font-medium text-neutral-700">Background</p>
              <p className="text-xs text-neutral-500">#efefef</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-800">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-neutral-700 mb-8">
            Start customizing this template to create your next great project.
          </p>
          <button className="btn-secondary">
            Start Building
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto text-center text-neutral-600">
          <p>Built with Next.js • Deployed on Vercel • Styled with Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
