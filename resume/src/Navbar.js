const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Nazanin's Resume</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#7d17b8',
                    borderRadius: '8px'
                }}>Personal Blog</a>

            </div>
        </nav>
     );
}
 
export default Navbar;