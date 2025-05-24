
import Image from 'next/image';
import { FiMail, FiPhone, FiGithub } from 'react-icons/fi';

function AboutPage() {
  return (
   <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
  <div className="flex flex-col items-center text-center">
    <Image
      src="/images/adam.jpg"
      alt="Adam Krasiński"
      width={150}
      height={150}
      className="rounded-full"
    />
    <h2 className="text-2xl font-bold mt-4">Adam Krasiński</h2>
    <p className="text-muted-foreground">Frontend / Fullstack Developer</p>
  </div>

  {/* Prawa kolumna */}
  <div className="space-y-4 text-lg">
    <div className="flex items-center gap-4">
      <FiMail className="text-primary" />
      <span>2014adam04@gmail.com</span>
    </div>
    <div className="flex items-center gap-4">
      <FiPhone className="text-primary" />
      <span>+48 123 456 789</span>
    </div>
    <div className="flex items-center gap-4">
      <FiGithub className="text-primary" />
      <a href="https://github.com/AdamKrasinski047" target="_blank" className="hover:underline">
        github.com/AdamKrasinski047
      </a>
    </div>
  </div>
</section>

  );
}
export default AboutPage;
