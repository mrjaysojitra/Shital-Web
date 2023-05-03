import Link from 'next/link';
import React from 'react';

const CourseTwo = () => {
    const data = [
        {
            img: "course-1.jpg",
            title: "Spoken English",
            price: 49.00,
            lesson: 8,
            students: 16,
        },
        {
            img: "course-2.jpg",
            title: "IELTS",
            price: 49.00,
            lesson: 8,
            students: 16,
        },
        {
            img: "course-3.jpg",
            title: "CCC / CPT",
            price: 49.00,
            lesson: 8,
            students: 16,
        },
        {
            img: "course-4.jpg",
            title: "Tally",
            price: 49.00,
            lesson: 8,
            students: 16,
        },
        {
            img: "course-5.jpg",
            title: "Web Design",
            price: 49.00,
            lesson: 8,
            students: 16,
        },
        {
            img: "course-6.jpg",
            title: "Web Development",
            price: 49.00,
            lesson: 8,
            students: 16,
        },
        {
            img: "course-7.jpg",
            title: "Full Stack Development",
            price: 49.00,
            lesson: 8,
            students: 16,
        },
        {
            img: "course-8.jpg",
            title: "Python",
            price: 49.00,
            lesson: 8,
            students: 16,
        },
        {
            img: "course-9.jpg",
            title: "Digital Marketing",
            price: 49.00,
            lesson: 8,
            students: 16,
        },
        {
            img: "course-10.jpg",
            title: "Advanced Excel",
            price: 49.00,
            lesson: 8,
            students: 16,
        }
    ];
    return (
        <>
            <section className="courses-section">
                <div className="auto-container">
                    <div className="row">
                        {/* Course Block Two*/}
                        {data.map((item, i) => (
                            <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link href="/page-course-details">
                                                <img src={`/images/resource/${item.img}`} title="Shital" />
                                            </Link>
                                        </figure>
                                    
                                        <div className="value">Advanced</div>
                                    </div>
                                    <div className="content-box">
                                        <ul className="course-info">
                                            <li><i className="fa fa-book" /> {item.lesson} Lessons</li>
                                            <li><i className="fa fa-users" /> {item.students} Students</li>
                                            <li><i className="fa fa-clock" /> 3 Weeks</li>
                                        </ul>
                                        <h5 className="title"><Link href="/page-course-details">{item.title}</Link></h5>
                                        <div className="other-info">
                                            <div className="rating-box">
                                                <span className="text">(4.9 /8 Rating)</span>
                                                <div className="rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></div>
                                            </div>
                                            <div className="duration"><i className="fa fa-clock" /> 3 Weeks</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CourseTwo;