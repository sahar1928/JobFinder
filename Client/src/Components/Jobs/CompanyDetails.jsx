import React from 'react'
import { Link } from 'react-router-dom'
import CompanyLocation from '../Location/CompanyLocation'
const CompanyDetails = () => {
  return (
    <div className="jm-candidate-area pt-100 pb-60">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 order-1 order-lg-0">
                    <div className="jm-candidate-author-wrapper mr-25 mb-40">
                        <div className="jm-candidate-avater-portion jm-company-logo">
                            <img src="dist/assets/img/logo/logo.png" alt="img"/>
                            <h4 className="jm-candidate-avater-name">JobsFinder business and employment-focused social media platform </h4>
                            <span className="jm-candidate-designation">Social Media Platforms</span>
                            <div className="jm-candidate-favour-rating">
                                <span className="jm-candidate-rating">
                                    <i className="fa-thin fa-star"></i>
                                    <i className="fa-thin fa-star"></i>
                                    <i className="fa-thin fa-star"></i>
                                    <i className="fa-thin fa-star"></i>
                                    <i className="fa-thin fa-star"></i>
                                </span>
                                <Link to="#" className="jm-candidate-favour">
                                    <i className="fa-thin fa-heart"></i>
                                </Link>
                            </div>
                            <div className="jm-candidate-social-wrapper">
                                <Link to="#"><i className="fa-regular fa-envelope"></i></Link>
                                <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                                <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                                <Link to="#"><i className="fa-light fa-phone-flip"></i></Link>
                            </div>
                        </div>
                        <div className="jm-candidate-profile-overview-portion">
                            <h4 className="jm-candidate-profile-overview-title">Company Overview</h4>
                            <ul className="jm-job-sidebar-review-list mb-15">
                                <li><i className="fa-thin fa-user"></i> <span className="jm-job-review-label">Owners : </span> <span className="job-review-value">Sahar and Lidor</span></li>
                                <li><i className="fa-light fa-transgender"></i> <span className="jm-job-review-label">Gender : </span> <span className="job-review-value">Males</span></li>
                                <li><i className="fa-thin fa-users"></i> <span className="jm-job-review-label">Employees : </span> <span className="job-review-value">150-250</span></li>
                                <li><i className="fa-thin fa-building"></i> <span className="jm-job-review-label">Industry : </span> <span className="job-review-value">Private</span></li>
                                <li><i className="fa-thin fa-globe"></i> <span className="jm-job-review-label">Website : </span> <Link target="_blank" to="http://www.JobsFinder.com/" className="job-review-value">JobsFinder.com</Link></li>
                                <li><i className="fa-thin fa-location-crosshairs"></i> <span className="jm-job-review-label">Location : </span> <span className="job-review-value">Tel Aviv-Yafo, Israel</span></li>
                                <li><i className="fa-thin fa-star-sharp-half-stroke"></i> <span className="jm-job-review-label">Estabished : </span> <span className="job-review-value">04 July, 2023</span></li>
                            </ul>
                            <div className="jm-candidate-profile-buttons mt-25">
                                <Link to="#" className="jm-candidate-d-btn"><i className="fa-thin fa-phone"></i>Contact Us</Link>
                            </div>
                        </div>
                        <div className="jm-candidate-profile-overview-portion">
                            <h4 className="jm-candidate-profile-overview-title">Working Days</h4>
                            <ul className="jm-job-sidebar-working-daylist">
                                <li><span className="jm-job-working-daylist-label">Saturday : </span> <span className="jm-job-working-daylist-value">10am - 6pm</span></li>
                                <li><span className="jm-job-working-daylist-label">Sunday : </span> <span className="jm-job-working-daylist-value">10am - 6pm</span></li>
                                <li><span className="jm-job-working-daylist-label">Monday : </span> <span className="jm-job-working-daylist-value">10am - 6pm</span></li>
                                <li><span className="jm-job-working-daylist-label">Tuesday : </span> <span className="jm-job-working-daylist-value">10am - 6pm</span></li>
                                <li><span className="jm-job-working-daylist-label">Wednesday : </span> <span className="jm-job-working-daylist-value">10am - 6pm</span></li>
                                <li><span className="jm-job-working-daylist-label">Thursday : </span> <span className="jm-job-working-daylist-value">10am - 6pm</span></li>
                                <li><span className="jm-job-working-daylist-label">Friday : </span> <span className="jm-job-working-daylist-value">Close</span></li>
                            </ul>
                        </div>
                        <div className="jm-candidate-profile-overview-portion">
                            <h4 className="jm-candidate-profile-overview-title">Company Location</h4>
                                <CompanyLocation selectedCity="Tel Aviv-Yafo"/>
                        </div>

                    </div>
                </div>
                <div className="col-lg-8 order-0 order-lg-1">
                    <div className="jm-candidate-content-wrapper mb-40">
                        <div className="jm-candidate-content-about mb-30">
                            <h4 className="jm-candidate-content-inner-title">About Company</h4>
                            <p>Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.</p>
                            <p>
                            As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience lies in successfully conceptualizing, designing, and modifying consumer products specific to interior design and home furnishings.</p>
                        </div>
                        <div className="jm-company-offer-jobs">
                            <h4 className="jm-company-offer-title">Current Offering Positions</h4>
                            <div className="row jm-company-offer-jobs-wrapper">
                                <div className="col-xl-12">
                                    <div className="jm-latest-job-layout-3">
                                        <div className="jm-latest-job-layout-3-wrapper">
                                            <div className="jm-latest-job-layout-3-img">
                                                <img src="assets/img/job/apple.png" alt="apple"/>
                                            </div>
                                            <div className="jm-latest-job-layout-3-info">
                                                <h4 className="jm-latest-job-layout-3-info-title"><Link to="/jobDetailsPage">Software Development Company</Link></h4>
                                                <div className="jm-latest-job-layout-3-info-meta">
                                                    <span><i className="fa-thin fa-tags"></i>WordPress, Java</span>
                                                    <span><i className="fa-thin fa-location-dot"></i>Cupertino, USA</span>
                                                    <span><i className="fa-thin fa-money-bill-1"></i>$35000 - $40000</span>
                                                    <span><i className="fa-thin fa-clock"></i>Full Time</span>
                                                    
                                                </div>
                                            </div>
                                            <div className="jm-latest-job-layout-3-submit">
                                                <Link to="/postJobPage" className="jm-latest-job-layout-3-btn">Apply Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="jm-latest-job-layout-3">
                                        <div className="jm-latest-job-layout-3-wrapper">
                                            <div className="jm-latest-job-layout-3-img">
                                                <img src="assets/img/job/volkswagen.png" alt="apple"/>
                                            </div>
                                            <div className="jm-latest-job-layout-3-info">
                                                <h4 className="jm-latest-job-layout-3-info-title"><Link to="/jobDetailsPage">Nutrition & Health Care</Link></h4>
                                                <div className="jm-latest-job-layout-3-info-meta">
                                                    <span><i className="fa-thin fa-tags"></i>Food, Farming</span>
                                                    <span><i className="fa-thin fa-location-dot"></i>Cupertino, USA</span>
                                                    <span><i className="fa-thin fa-money-bill-1"></i>$5000 - $10000</span>
                                                    <span><i className="fa-thin fa-clock"></i>Part Time</span>
                                                    
                                                </div>
                                            </div>
                                            <div className="jm-latest-job-layout-3-submit">
                                                <Link to="/postJobPage" className="jm-latest-job-layout-3-btn">Apply Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="jm-latest-job-layout-3">
                                        <div className="jm-latest-job-layout-3-wrapper">
                                            <div className="jm-latest-job-layout-3-img">
                                                <img src="assets/img/job/google.png" alt="apple"/>
                                            </div>
                                            <div className="jm-latest-job-layout-3-info">
                                                <h4 className="jm-latest-job-layout-3-info-title"><Link to="/jobDetailsPage">Ultra Research Technology</Link></h4>
                                                <div className="jm-latest-job-layout-3-info-meta">
                                                    <span><i className="fa-thin fa-tags"></i>Software, IT</span>
                                                    <span><i className="fa-thin fa-location-dot"></i>California, USA</span>
                                                    <span><i className="fa-thin fa-money-bill-1"></i>$10000 - $500000</span>
                                                    <span><i className="fa-thin fa-clock"></i>Part Time</span>
                                                    
                                                </div>
                                            </div>
                                            <div className="jm-latest-job-layout-3-submit">
                                                <Link to="/postJobPage" className="jm-latest-job-layout-3-btn">Apply Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="jm-latest-job-layout-3">
                                        <div className="jm-latest-job-layout-3-wrapper">
                                            <div className="jm-latest-job-layout-3-img">
                                                <img src="assets/img/job/meta.png" alt="apple"/>
                                            </div>
                                            <div className="jm-latest-job-layout-3-info">
                                                <h4 className="jm-latest-job-layout-3-info-title"><Link to="/jobDetailsPage">Head Of Commercial Contracts</Link></h4>
                                                <div className="jm-latest-job-layout-3-info-meta">
                                                    <span><i className="fa-thin fa-tags"></i>Software, IT</span>
                                                    <span><i className="fa-thin fa-location-dot"></i>California, USA</span>
                                                    <span><i className="fa-thin fa-money-bill-1"></i>$10000 - $500000</span>
                                                    <span><i className="fa-thin fa-clock"></i>Part Time</span>
                                                    
                                                </div>
                                            </div>
                                            <div className="jm-latest-job-layout-3-submit">
                                                <Link to="/postJobPage" className="jm-latest-job-layout-3-btn">Apply Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="jm-latest-job-layout-3">
                                        <div className="jm-latest-job-layout-3-wrapper">
                                            <div className="jm-latest-job-layout-3-img">
                                                <img src="assets/img/job/nike.png" alt="apple"/>
                                            </div>
                                            <div className="jm-latest-job-layout-3-info">
                                                <h4 className="jm-latest-job-layout-3-info-title"><Link to="/jobDetailsPage">Human Resource Development</Link></h4>
                                                <div className="jm-latest-job-layout-3-info-meta">
                                                    <span><i className="fa-thin fa-tags"></i>Accessory, Human</span>
                                                    <span><i className="fa-thin fa-location-dot"></i>California, USA</span>
                                                    <span><i className="fa-thin fa-money-bill-1"></i>$10000 - $500000</span>
                                                    <span><i className="fa-thin fa-clock"></i>Part Time</span>
                                                    
                                                </div>
                                            </div>
                                            <div className="jm-latest-job-layout-3-submit">
                                                <Link to="/postJobPage" className="jm-latest-job-layout-3-btn">Apply Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="jm-latest-job-layout-3">
                                        <div className="jm-latest-job-layout-3-wrapper">
                                            <div className="jm-latest-job-layout-3-img">
                                                <img src="assets/img/job/starbuck.png" alt="apple"/>
                                            </div>
                                            <div className="jm-latest-job-layout-3-info">
                                                <h4 className="jm-latest-job-layout-3-info-title"><Link to="/jobDetailsPage">Communication systems Engineer</Link></h4>
                                                <div className="jm-latest-job-layout-3-info-meta">
                                                    <span><i className="fa-thin fa-tags"></i>Designer, Manager</span>
                                                    <span><i className="fa-thin fa-location-dot"></i>California, USA</span>
                                                    <span><i className="fa-thin fa-money-bill-1"></i>$10000 - $500000</span>
                                                    <span><i className="fa-thin fa-clock"></i>Full Time</span>
                                                    
                                                </div>
                                            </div>
                                            <div className="jm-latest-job-layout-3-submit">
                                                <Link to="/postJobPage" className="jm-latest-job-layout-3-btn">Apply Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CompanyDetails