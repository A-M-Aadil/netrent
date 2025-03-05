import { cLogo, corelogicLogo, mainLogo } from '../../assets/logos'
import { agentIcon, communityIcon } from '../../assets/icons'
import { useEffect, useRef, useState } from 'react'
import CoreLogicModel from '../home/CoreLogicModel'
import { gsap } from 'gsap';
const Header = () => {
    const navList = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About Us',
            link: '/aboutus'
        },
        {
            name: 'Residential',
            link: '/residential'
        },
        {
            name: 'Commercial',
            link: '/commercial'
        },
        {
            name: 'Business',
            link: '/business'
        }
    ]


    const linkRefs = useRef<Array<HTMLAnchorElement>>([]);

    useEffect(() => {
        // GSAP animation on hover
        linkRefs.current.forEach((link) => {
            const line = link.querySelector('span'); // Target the span element

            if (line) {
                link.addEventListener('mouseenter', () => {
                    gsap.to(line, {
                        x: '180%', // Move the line to the right
                        duration: 2,
                        ease: 'power2.out',
                        background: 'orange',
                    });
                });

                link.addEventListener('mouseleave', () => {
                    gsap.to(line, {
                        x: '-120%', // Move the line back to the left
                        duration: 2,
                        ease: 'power2.out',
                        background: 'blue',
                    });
                });
            }
        });

        // Cleanup event listeners on unmount
        return () => {
            linkRefs.current.forEach((link) => {
                const line = link.querySelector('span');
                if (line) {
                    link.removeEventListener('mouseenter', () => { });
                    link.removeEventListener('mouseleave', () => { });
                }
            });
        };
    }, []);
    const [openAgentModal, setOpenAgentModal] = useState(false)
    return (
        <>
            <div className='w-full flex flex-row items-center justify-between px-5 py-4 sm:px-7 md:px-10 sm:py-6'>
                <div className='flex flex-row gap-4 sm:gap-7 items-center'>
                    <a href="/">
                        <img src={mainLogo} alt='logo' className='w-[72px] h-[80px]' />
                    </a>
                    <div className='hidden md:flex flex-row gap-4'>
                        <div className='hidden md:flex flex-row gap-4'>
                            <div className='flex flex-row gap-4'>
                                {navList.map((nav, index) => (
                                    <a
                                        key={index}
                                        href={nav.link}
                                        ref={(el) => {
                                            if (el) linkRefs.current[index] = el; // Assign the ref only if the element exists
                                        }}
                                        className="text-[16px] text-primary overflow-hidden relative"
                                    >
                                        {nav.name}
                                        <span className="absolute bottom-0 left-0 h-[2px] w-[60%] bg-orange-500 transform -translate-x-[120%]"></span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col-reverse items-end  sm:flex-row gap-2 sm:gap-10'>
                    <button
                        onClick={() => setOpenAgentModal(true)}
                        className='bg-secondary/20 hover:bg-secondary/30 transition-all cursor-pointer duration-300 ease-in-out flex items-center justify-center gap-2 w-[220px] h-[40px] border-black/20 border-[1px] rounded-l-full rounded-r-full'>
                        <img src={cLogo} alt='logo' className='size-[24px]' />
                        <img src={corelogicLogo} alt='logo' className='w-[69px] h-[13px]' />

                        <h2 className='text-primary text-[14px]'>
                            Digital Reports
                        </h2>
                    </button>
                    <div className='flex flex-col-reverse items-end sm:items-center sm:flex-row gap-5'>
                        <button
                            className='bg-secondary/20 hover:bg-secondary/30 transition-all cursor-pointer duration-300 ease-in-out flex items-center justify-center gap-2 w-[130px] h-[40px] border-black/20 border-[1px] rounded-l-full rounded-r-full'>
                            <div className='w-6 h-6 bg-primary rounded-full flex items-center justify-center'>
                                <img src={agentIcon} alt='icon' className='size-[12px]' />
                            </div>

                            <h2 className='text-primary text-[14px]'>
                                Join As Agent
                            </h2>
                        </button>
                        <button className='bg-secondary/20 hover:bg-secondary/30 transition-all cursor-pointer duration-300 ease-in-out flex items-center justify-center gap-2 w-[146px] h-[40px] border-black/20 border-[1px] rounded-l-full rounded-r-full'>
                            <div className='w-6 h-6 bg-primary rounded-full flex items-center justify-center'>
                                <img src={communityIcon} alt='icon' className='size-[12px]' />
                            </div>

                            <div className='flex flex-col items-start leading-3'>
                                <h2 className='text-primary text-[13px]'>
                                    Join Community
                                </h2>
                                <p className='text-primary text-[9px] capitalize'>
                                    Ask a question?
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <CoreLogicModel open={openAgentModal} onClose={() => setOpenAgentModal(false)} />
        </>
    )
}

export default Header