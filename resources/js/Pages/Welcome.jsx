import Header from '@/Components/Home/Header';
import Project from '@/Components/Home/Project';
import Skill from '@/Components/Home/Skill';
import Footer from '@/Components/Footer/Footer';
import About from '@/Components/Home/About';
import ContactUs from '@/Components/Home/ContactUs';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
   <div class="bg-gray-50 text-gray-800">
            <Header />
                <section class="relative bg-gradient-to-r from-blue-800 via-blue-900 to-gray-900 text-white py-20">
                    <div class="container mx-auto text-center">
                        <h2 class="text-5xl font-bold mb-6 animate-fadeInUp">Building Interactive Web Experiences</h2>
                        <p class="text-xl mb-8 animate-fadeInUp delay-2">
                            Full-Stack Developer | Laravel & JavaScript Frameworks Specialist
                        </p>
                    </div>
                 </section>
               <About title="About" id="about"
                description="I'm Muhammad Ilyas, a passionate Full-Stack Developer with over 4
                 years of experience in building dynamic web applications. I specialize in backend
                  development with Laravel and frontend development using Vue.js, React.js, and AngularJS.
                   I thrive on creating seamless user experiences and efficient, scalable solutions" />
                 <Project/>
            <Skill />
            <ContactUs />
            <Footer />
</div>

    );
}
