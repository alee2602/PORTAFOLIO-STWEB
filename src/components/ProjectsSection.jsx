
import React, { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import Slider from 'react-slick';
import styles from '@/styles/components/projectsection.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProjectSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const projects = [
        {
            image: '/images/kirbycssart.png',
            title: 'Kirby CSS Art',
            description: 'This project showcases a vibrant CSS art piece inspired by the popular video game character, Kirby.',
            githubLink: 'https://github.com/alee2602/LAB4-STWEB',
        },
        {
            image: '/images/talkiechat.png',
            title: 'Chat Client',
            description: 'Talkie is a versatile chat client designed to enhance communication. The project allows users to switch between different themes, offering a personalized chat experience. ',
            githubLink: 'https://github.com/alee2602/LAB5-STWEB',
        },
        {
            image: '/images/grammyblog.png',
            title: 'Blog Admin',
            description: 'This project is an administrative interface designed for managing a CRUD (Create, Read, Update, Delete) system for a blog dedicated to the Grammy Awards.',
            githubLink: 'https://github.com/alee2602/PROYECTO1-STWEB',
        },
        {
            image: '/images/restaurante.png',
            title: 'Restaurante Asgard',
            description: 'Restaurante Asgard is a web application designed to manage the operations of a restaurant with multiple features.',
            githubLink: 'https://github.com/SRV-JSPA/P2_BD',
        },
        {
            image: '/images/calculator1.png',
            title: 'Simple Calculator',
            description: 'The Simple Calculator is a straightforward web application designed to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. ',
            githubLink: 'https://github.com/alee2602/LAB8-STWEB',
        },
    ];

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    useEffect(() => {
        const prevArrow = document.querySelector('.slick-prev');
        const nextArrow = document.querySelector('.slick-next');

        if (currentSlide === 0) {
            prevArrow.style.display = 'none';
        } else {
            prevArrow.style.display = 'block';
        }

        if (currentSlide === projects.length - 1) {
            nextArrow.style.display = 'none';
        } else {
            nextArrow.style.display = 'block';
        }
    }, [currentSlide, projects.length]);


    return (
        <div className={styles.carouselContainer}>
            <section id="projects">
                <h2 className={styles.titletext}>My Projects!</h2>
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </Slider>
            </section>
        </div>
    );
};

export default ProjectSection;