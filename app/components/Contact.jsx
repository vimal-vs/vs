import { BsArrowRightShort } from "react-icons/bs";

export default function Contact(){
    return ( 
        <section id="contact" className="mt-2 lg:mt-40 lg:scroll-mt-24 text-slate-400 text-xl">
            <p>Let&apos;s connect via <a href="mailto:vimalsakkthi@gmail.com" className="text-slate-200 hover:text-teal-300">mail</a>, or send me a <a href="" className="text-slate-200 hover:text-teal-300">message</a>.</p>
            <div className="mt-8 mb-14 lg:mb-0 lg:mt-8">
                <iframe className="hidden md:hidden lg:block" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406.03875672455!2d78.60662693077384!3d10.816002347580794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2aecdad%3A0x6de02c3bedbbaea6!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1686775621139!5m2!1sen!2sin" width="500" height="350" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <iframe className="hidden md:block lg:hidden" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406.03875672455!2d78.60662693077384!3d10.816002347580794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2aecdad%3A0x6de02c3bedbbaea6!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1686775621139!5m2!1sen!2sin" width="500" height="350" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <iframe className="block md:hidden lg:hidden" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406.03875672455!2d78.60662693077384!3d10.816002347580794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2aecdad%3A0x6de02c3bedbbaea6!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1686775621139!5m2!1sen!2sin" width="320" height="400" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="group flex gap-1 mt-8 xl:mt-20 hover:underline decoration-teal-400 underline-offset-4 transition-all text-lg">
            <a className="text-slate-200" href="/resume">View Full Résumé</a>
            <span className='mt-1 group-hover:translate-x-2 transition-all'><BsArrowRightShort />
            </span>

            </div>
        </section>
    )
}