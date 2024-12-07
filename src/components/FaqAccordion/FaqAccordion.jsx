import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>At Xavier’s University, we understand that prospective students and their families have many questions. To help guide you through the admissions process and beyond, we’ve compiled a list of frequently asked questions. Whether you're curious about our programs, campus life, or the application process, we’ve got you covered.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>First question ?</Accordion.Header>
                    <Accordion.Body>
                    What makes Xavier’s University different from other institutions?"

"Xavier’s University stands out for its commitment to providing a holistic education that blends academic excellence with personal development. Our focus is not only on delivering world-class education but also on fostering leadership, ethical responsibility, and community engagement
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Second question ?</Accordion.Header>
                    <Accordion.Body>
                    What types of support services are available for students at Xavier’s University?"

"Xavier’s University offers a wide range of support services to ensure that students have everything they need to succeed academically and personally. These include academic advising, career counseling, mental health resources, and peer mentorship programs
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Third question ?</Accordion.Header>
                    <Accordion.Body>
                    How can I apply to Xavier’s University?"

"Applying to Xavier’s University is a straightforward process. First, visit our official website and navigate to the admissions page where you’ll find detailed instructions for both undergraduate and postgraduate programs. You’ll need to complete an online application form, submit your academic transcripts, and provide any additional documentation required for your chosen program
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Fourth question ?</Accordion.Header>
                    <Accordion.Body>
                    What scholarships and financial aid options are available at Xavier’s University?"

"Xavier’s University offers a variety of scholarships and financial aid options to support students in their academic journey. These include merit-based scholarships, need-based financial assistance, and special awards for students excelling in sports, arts, and other extracurricular activities. We also offer flexible payment plans and opportunities for student loans through partnerships with financial institutions
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;