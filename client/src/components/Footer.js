const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">             
                    <div className="col-12 col-lg-3 col-md-4 links">
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/createpost">Create Blog</a></li>
                            <li><a href="/aboutus">About Us</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-5 col-md-8 add">
                        <h5>Our Address</h5>
                        <address>
                            <a href="/">
                                Sardar Vallabhbhai National Institute of Technology, Surat -  395007
                            </a>
                    </address>                 
                    </div>
                    <div className="col-lg-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-linkedin" href="https://in.linkedin.com"><i className="fab fa-linkedin"></i> </a>
                            <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/"><i className="fab fa-twitter"></i> </a>
                            <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/"><i className="fab fa-instagram"></i> </a>
                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/"><i className="fab fa-facebook"></i> </a>
                            <a className="btn btn-social-icon btn-google" href="https://google.com/+"><i className="fab fa-google-plus"></i></a>                        
                            <a className="btn btn-social-icon btn-google" href="https://youtube.com/"><i className="fab fa-youtube"></i> </a>
                        </div>
                        <div className="row justify-content-center add" style = {{padding: '15px'}}>
                            <p>&copy; Copyright 2021 Blog</p>
                        </div>
                    </div>                
                </div>
            </div>
        </footer>
    );
}

export default Footer;
