const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 ">
      {/* First Col */}
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Mikasa works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Mikasa Plus</p>
        <p>Mikasa Luxe</p>
      </div>
      {/* Second Col */}
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Community</h5>
        <p>Acessibility</p>
        <p>THIS IS NOT A REAL SITE</p>
        <p>AIRBNB CLONE PROJECT</p>
        <p>Full Stack Engineer</p>
        <p>Software Engineer</p>
      </div>
      {/* Third Col */}
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Patrick Gip</p>
        <p>Presents</p>
        <p>Aspiring Software Engineer</p>
        <p>Family first!</p>
        <p>Hope I land a job!</p>
      </div>
      {/* Fourth Col */}
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>React</p>
        <p>JavaScript</p>
        <p>Two Sums</p>
      </div>
    </div>
  )
};

export default Footer;