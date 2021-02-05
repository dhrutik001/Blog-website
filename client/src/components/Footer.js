const Footer = () => {
    return (
        <footer className="footer">
            <div class="container-fluid">
                <div class="row">             
                    <div class="col-12 col-lg-3 col-md-4 links">
                        <ul class="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/createpost">Create Blog</a></li>
                            <li><a href="/aboutus">About Us</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-5 col-md-8 add">
                        <h5>Our Address</h5>
                        <address>
                            <a href="/">
                                Sardar Vallabhbhai National Institute of Technology, Surat -  395007
                            </a>
                    </address>                 
                    </div>
                    <div class="col-lg-4 align-self-center">
                        <div class="text-center">
                            <a class="btn btn-social-icon btn-linkedin" href="https://in.linkedin.com"><i class="fa fa-linkedin"></i> </a>
                            <a class="btn btn-social-icon btn-twitter" href="https://twitter.com/"><i class="fa fa-twitter"></i> </a>
                            <a class="btn btn-social-icon btn-instagram" href="https://www.instagram.com/"><i class="fa fa-instagram"></i> </a>
                            <a class="btn btn-social-icon btn-facebook" href="https://www.facebook.com/"><i class="fa fa-facebook"></i> </a>
                            <a class="btn btn-social-icon btn-google" href="https://google.com/+"><i class="fa fa-google-plus"></i></a>                        
                            <a class="btn btn-social-icon btn-google" href="https://youtube.com/"><i class="fa fa-youtube"></i> </a>
                        </div>
                        <div class="row justify-content-center add" style = {{padding: '15px'}}>
                            <p>&copy; Copyright 2021 Blog</p>
                        </div>
                    </div>                
                </div>
            </div>
        </footer>
    );
}

export default Footer;
