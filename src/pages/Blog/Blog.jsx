import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.jpg';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import Blog8Img from '../../utils/images/blog8-img.jpg';
import Blog9Img from '../../utils/images/blog9-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Blog 1',
        description: 'At Xaviers University, we are committed to providing a transformative educational experience. Our programs are designed to challenge students intellectually while fostering their personal development.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Blog 2',
        description: 'We offer state-of-the-art facilities and a variety of resources, from libraries to labs, to support every students academic journey. Our global partnerships provide opportunities for internships.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Blog 3',
        description: 'Beyond academics, our campus offers a vibrant student life, with numerous clubs, organizations, and events that foster personal growth and lifelong friendships.'
    },
    {
        id: 4,
        img: [Blog4Img],
        title: 'Blog 4',
        description: ' Our programs emphasize cultural awareness, global perspectives, and collaboration across borders. Through various initiatives, mentorship programs.'
    },
    {
        id: 5,
        img: [Blog5Img],
        title: 'Blog 5',
        description: ' Our strong network of alumni and industry partnerships provides valuable opportunities for internships, career advice, and networking.'
    },
    {
        id: 6,
        img: [Blog6Img],
        title: 'Blog 6',
        description: 'Whether you aspire to work in technology, business, healthcare, or the arts, Xaviers University helps you build a successful and rewarding future.'
    },
    {
        id: 7,
        img: [Blog7Img],
        title: 'Blog 7',
        description: 'From cutting-edge research to hands-on learning opportunities we ensure that every student has the resources and support needed to thrive.'
    },
    {
        id: 8,
        img: [Blog8Img],
        title: 'Blog 8',
        description: 'Study abroad programs, and collaborative research, preparing students for a successful future in an interconnected world.'
    },
    {
        id: 9,
        img: [Blog9Img],
        title: 'Blog 9',
        description: 'Xaviers University offers a dynamic and nurturing campus environment that fosters both academic and personal growth.'
    },
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Blog</h1>
                <p className='text-center w-75 mb-5'>At Xavier's University, we believe that education should be transformative, not just informative. With a focus on both academic rigor and personal growth, our courses are designed to inspire students to think critically, act ethically, and pursue their passions. Our campus offers a vibrant community where students can engage in a variety of extracurricular activities, internships, and collaborative projects.</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;