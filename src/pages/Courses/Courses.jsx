import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [ArtCourseImg],
        title: 'Art Course',
        description: ' Art course designed for creative minds who wish to explore and develop their artistic talents. Our program covers a wide range of disciplines, including painting, sculpture, digital art, and design, giving students the tools and techniques needed to express themselves visually'
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Business Course',
        description: 'Business course designed to equip students with the knowledge and skills needed to excel in the fast-paced business world. Our program covers key areas such as management, marketing, finance, and entrepreneurship, providing students with a well-rounded understanding of business operations'
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'Computer Science Course',
        description: 'Computer Science course that prepares students for the rapidly evolving tech industry. Our program covers a wide range of topics, including programming, algorithms, data structures, artificial intelligence, and cybersecurity'
    },
    {
        id: 4,
        img: [EducationCourseImg],
        title: 'Education Course',
        description: ' Education course designed for those passionate about shaping the future of students. Our program covers various aspects of teaching, including curriculum development, educational psychology, classroom management, and special education'
    },
    {
        id: 5,
        img: [HealthcareCourseImg],
        title: 'Healthcare Course',
        description: ' Healthcare course that equips students with the essential skills and knowledge required to thrive in the ever-evolving healthcare industry. Our program covers a wide range of topics including healthcare management, medical ethics, public health, and patient care'
    },
    {
        id: 6,
        img: [LawCourseImg],
        title: 'Law Course',
        description: ' Law course designed to prepare students for a successful career in the legal field. Our program covers fundamental areas such as constitutional law, criminal law, international law, and legal ethics. Students engage in case studies, moot courts, and internships, providing them with practical experience and a deep understanding of the law in real-world contexts'
    },
    {
        id: 7,
        img: [MusicCourseImg],
        title: 'Music Course',
        description: 'Music course designed for students passionate about developing their musical talents and knowledge. Our program covers various aspects of music, including theory, composition, performance, and music technology'
    },
    {
        id: 8,
        img: [SportCourseImg],
        title: 'Sport Course',
        description: 'Sport course designed for students with a passion for athletics and physical education. Our program covers a wide range of topics, including sports management, exercise science, coaching techniques, and sports psychology'
    },
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
                <p className='text-center w-75 mb-5'>We offer a wide range of courses designed to equip students with the knowledge and skills necessary for success in their careers. Each course is carefully crafted by industry experts to provide both theoretical understanding and practical experience</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;