export default function Footer() {
    return (
        <footer className="relative bg-[#2C2826] text-white pt-32 pb-12 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
                {/* Brand */}
                <div className="md:col-span-4 flex flex-col justify-between h-full">
                    <div>
                        <h2 className="text-6xl font-serif tracking-tight mb-6">ARTURA</h2>
                        <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                            Curating the world's finest masterpieces for the modern connoisseur.
                            Bring the museum home.
                        </p>
                    </div>
                </div>

                {/* Links */}
                <div className="md:col-span-4 grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xs uppercase tracking-widest text-[#B8860B] mb-6">Explore</h3>
                        {['The Collection', 'Masters', 'Private Sales', 'AI Try-On'].map((item) => (
                            <a key={item} href="#" className="block text-sm text-white/80 hover:text-white transition-colors cursor-hover">
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xs uppercase tracking-widest text-[#B8860B] mb-6">Concierge</h3>
                        {['Expert Advisory', 'Framing Services', 'Shipping & Returns', 'FAQ'].map((item) => (
                            <a key={item} href="#" className="block text-sm text-white/80 hover:text-white transition-colors cursor-hover">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Newsletter */}
                <div className="md:col-span-4">
                    <h3 className="text-xs uppercase tracking-widest text-[#B8860B] mb-6">The Inner Circle</h3>
                    <p className="text-white/60 text-sm mb-6">
                        Join for exclusive access to new acquisitions and private viewings.
                    </p>
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#B8860B] transition-colors cursor-hover"
                        />
                        <button className="absolute right-0 top-1/2 -translate-y-1/2 text-xs uppercase tracking-widest text-[#B8860B] opacity-70 group-hover:opacity-100 transition-opacity">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/40">
                <span>© 2026 Artura Inc.</span>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                </div>
            </div>
        </footer>
    );
}
