const Footer = () => {
    return (
      <footer className="w-full  text-white text-sm">
        {/* Links section */}
        <div className="flex justify-center gap-4 py-3 border-b border-slate-800">
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            PRIVACY POLICY
          </a>
          <span className="text-slate-500">|</span>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            TERMS & CONDITIONS
          </a>
        </div>
  
        {/* Privacy info */}
        <div className="text-center py-3 text-slate-400 text-xs px-4">
          <a href="#" className="hover:text-blue-400 transition-colors">
            DO NOT SELL OR SHARE MY PERSONAL INFORMATION / PRIVACY RIGHTS FOR RESIDENTS OF CERTAIN STATES
          </a>
        </div>
  
        {/* Copyright */}
        <div className="bg-slate-950 text-center py-3 text-slate-400 text-xs border-t border-slate-800">
          © 2024 Auto Policy Quotes | All Rights Reserved
        </div>
      </footer>
    );
  };
  
  export default Footer;