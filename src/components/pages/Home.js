import React, { Component } form 'react';
import Navbar form '../../components/navbar/Navbar';
import Profile form '../../components/pages/profile';
import About form '../../components/pages/about';
import Skills form '../../components/pages/skills/Skills';
import Experiences form '../../components/pages/experiences/Experiences';
import Educations form '../../components/pages/educations/Educations';
import Portofolio form '../../components/pages/portofolio/Portofolios';

export default class Home extends Component {
    render() {
        return (
            <section>
                <Navbar />
                <div className='container'>
                    <div className='row'>
                        <div className='col s12 m3'>
                            <Profile />
                        </div>
                        <div className='col s12 m9'>
                            <About />
                            <Skills />
                            <Experiences />
                            <Educations />
                            <Portofolio />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
