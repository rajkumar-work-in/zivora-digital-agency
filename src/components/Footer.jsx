import assets from '../assets/assets'
import toast from 'react-hot-toast'

const Footer = ({ theme }) => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "402e9426-b9ba-406e-95cc-fce5d3902d92");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Thank you for your submission!");
                event.target.reset();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message); 
        }
    };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4
    sm:px-10 lg:px-24 xl:px-40 py-6">
        {/* footer top */}
        <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">

            {/* left */}
            <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
                <img src={theme === "dark" ? assets.logo_dark : assets.logo} alt="" className="w-32 sm:w-44" />
                <p className="max-w-md">From strategy to execution, we craft digital solutions that move
                    your business forward.
                </p>

                <ul className="flex gap-8">
                    <li><a href="#hero" className="hover:text-primary duration-75">Home</a></li>
                    <li><a href="#services" className="hover:text-primary">Services</a></li>
                    <li><a href="#our-work" className="hover:text-primary">Our Work</a></li>
                    <li><a href="#contact-us" className="hover:text-primary">Contact Us</a></li>
                </ul>
            </div>

            {/* right */}
            <div className="text-gray-600 dark:text-gray-400 ">
                <h3 className="font-semibold">
                    Subscribe to our newsletter
                </h3>
                <p className="text-sm mt-2 mb-6">
                    The latest news, articles, and resources, sent to your inbox weekly.
                </p>
                <div className="flex gap-2 text-sm">
                    <form onSubmit={onSubmit} className="flex gap-2">
                        <input type="email" placeholder="Enter your email" className="w-full px-8 py-2 text-sm
                        outline-none rounded border border-gray-300 dark:border-gray-500
                        dark:text-gray-200 bg-transparent" required />

                        <button type="submit" className="bg-primary text-white rounded-lg px-5 
                        cursor-pointer hover:bg-blue-700 active:scale-95 duration-150 transtion-all
                        outline-none">
                            Subcribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <hr className="border-gray-300 dark:border-gray-600 my-6"/>

        {/* footer botton */}
        <div className="flex-wrap pb-6 flex justify-center sm:justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-white/60">
                © {new Date().getFullYear()} Zivora. All rights reserved.
            </p>

            <div className="flex items-center justify-between gap-4">
                <a href="https://www.linkedin.com/in/rajkumar-work-in" target="_blank" rel="noreferrer">
                    <img src={assets.linkedin_icon} alt="" />
                </a>
                <a href="https://wa.me/8825520336" target="_blank" rel="noreferrer">
                    <img src={assets.whatsapp_icon} alt="" />
                </a>
                <a href="https://x.com/rajkumarworkin" target="_blank" rel="noreferrer">
                    <img src={assets.twitter_icon} alt="" />
                </a>
                <a href="https://github.com/rajkumar-work-in" target="_blank" rel="noreferrer">
                    <img src={assets.github_icon} alt="" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer;