import React from 'react';
import Footer from './Footer';
import Card from './Card';
import { ScrollParallax } from "react-just-parallax";
import Productselection from './selectionbulle/Productselection';



const Acceuil = () => {
    
   
    return (
        <div className='bg-[#ede4d5]'>
            {/* Bannière principale */}
                        <div className="main-banner relative w-auto lg:w-auto h-[30rem] md:h-[60rem] lg:h-[72rem] text-white text-center md:mt-[-20rem] flex justify-center items-center overflow-hidden">
                            <video autoPlay loop muted className="relative w-full h-full  object-cover opacity-70 ">
                                <source src="/src/assets/viewsunfootage.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 flex justify-center items-center">
                            
                            <div className="flex flex-col gap-10 mt-5 text-center">
                                <h1 className="text-4xl md:text-5xl py-12 drop-shadow-lg motion-preset-blur-up-lg motion-translate-y-in-[15rem] motion-duration-[4s] rockybilly-font">
                                    Transformez chaque bouffée en oeuvre d'art
                                </h1>
                                
                            </div>
                            
                            
                        </div>
                        </div>

                        {/* 
                        
                        <h1 className="text-4xl font-bold mb-4">Bienvenue sur notre site</h1>
                            <p className="text-lg">
                                Découvrez nos abonnements exclusifs et accédez à des services exceptionnels. opacity-0 animate-fade-in-subtitle
                            </p>
                            <p className=" text-4xl md:text-5xl font-bold   drop-shadow-lg leading-[4rem]  motion-duration-[5s] motion-blur-in-md motion-translate-y-in-50 ">
                                    Découvrez nos abonnements exclusifs <br/> et accédez à des services exceptionnels.
                                </p>
                        
                        
                        */}

            {/* Section descriptive des bienfaits de l'abonnement */}
            <div className="benefits-section bg-gray-100 dark:bg-zinc-700 pt-32 pb-20 relative z-10 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex items-center flex-col">
                    
                        <h2 className="text-4xl text-center rockybilly-font py-20  drop-shadow-md text-transparent bg-gradient-to-br  bg-clip-text from-[#c5a888]  to-orange-200  intersect-once motion-duration-[3s] motion-delay-300 intersect:motion-blur-in-md intersect:motion-translate-y-in-150 ">
                        Sabulle c'est quoi ?
                        </h2>
                    
                        
                        <div className="flex flex-col justify-center items-center gap-24 relative">
                            <ScrollParallax strength={0.05}shouldPause={true} >
                                <div className="flex justify-center ">
                                    <img  className=' rounded-xl w-96 h-96  md:w-[45rem] md:h-[25rem] object-cover intersect-once intersect:motion-preset-pop motion-duration-1000 motion-delay-300 ' src="/SABULLE_SALON_ENTREE.webp" alt="sabulllounge" />
                                </div>
                                
                            </ScrollParallax>
                            <ScrollParallax strength={0.07} shouldPause={true} >
                                <div className="flex flex-wrap items-center  gap-12">
                                    <Card title={'Élégance'}  className={'motion-delay-200'} svg={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles text-[#c5a888] "><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>}
                                    description={"Plongez dans un monde où luxe et élégance se rencontrent pour transformer chaque instant en une expérience inoubliable."}/>
                                    <Card title={'Exclusivité'} className={'motion-delay-500'} svg={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame text-[#c5a888]"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>}
                                    description={"Rejoignez notre club VIP et bénéficiez d'avantages exclusifs, incluant des remises substantielles et un accès prioritaire à nos nouveautés."}/>
                                    <Card title={'Expertise'} className={'motion-delay-700'} svg={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles text-[#c5a888]"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>}
                                    description={"Fort d'une expertise inégalée, SABULLE vous offre une sélection exquise des meilleurs produits disponibles."}/>
                                </div>
                            
                            </ScrollParallax>
                            
                        </div>
                    </div>


                </div>
                <img src="/bulle.png" alt="bubble" className=" hidden xl:block absolute top-20 -left-32 w-[40rem] h-auto  -rotate-45 intersect-once motion-duration-[2s] intersect:motion-blur-in-md intersect:-motion-translate-y-in-150 " />
                <img src="/bulle.png" alt="bubble" className="hidden xl:block absolute top-20 -right-32 w-[35rem] h-auto  rotate-45 intersect-once motion-duration-[2s] intersect:motion-blur-in-md intersect:-motion-translate-y-in-150" />
                <img src="/bulle.png" alt="bubble" className="hidden xl:block absolute bottom-0 -left-32 w-[35rem] h-auto  rotate-[4rad] z-[-5]  intersect-once motion-duration-[2s] intersect:motion-blur-in-md intersect:motion-translate-y-in-150" />
                <img src="/bulle.png" alt="bubble" className="hidden xl:block absolute bottom-0 -right-32 w-[35rem] h-auto  rotate-[2.142rad] z-[-5] intersect-once motion-duration-[2s] intersect:motion-blur-in-md intersect:motion-translate-y-in-150 " />
            </div>

            {/* Section des produits */}
            
            <div className="bg-[#ede4d5] products-container container mx-auto py-20 z-40">
                <h2 className="md:text-2xl font-bold  rockybilly-font text-center my-6  drop-shadow-md intersect-once motion-duration-[2s] intersect:motion-blur-in-md intersect:motion-translate-x-in-50">Notre Sélection  <span className=' duration-1000 drop-shadow-lg text-transparent bg-gradient-to-br  bg-clip-text from-[#c5a888]  to-orange-200 '> SABULLE</span></h2>
                <Productselection/>
            </div>
            <div className="benefits-section bg-gray-100 dark:bg-zinc-700 py-48 z-10">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-12 max-md:flex-col">
                        <img src="leclub.webp" alt="leclub" className='rounded-2xl  lg:w-[50%] lg:h-[50%]  drop-shadow-lg intersect-once  intersect:motion-preset-slide-up-md motion-duration-[2s] motion-ease-spring-smooth' />
                        <div className="flex flex-col gap-12">
                            <h2 className="text-3xl font-bold  inline-block drop-shadow-lg text-gray-600  intersect-once motion-duration-[2s] intersect:motion-blur-in-md intersect:motion-translate-x-in-150 ">
                                Rejoignez l'Élite : Le Cercle Prestigieux SABULLE
                            </h2>
                            <p className='text-xl text-gray-600  intersect-once motion-duration-[2s] intersect:motion-blur-in-md intersect:motion-translate-y-in-50 leading-[2.2rem]'>
                                Intégrez le PRESTIGIEUX CERCLE SABULLE pour bénéficier d'un accès exclusif à des produits sélectionnés,
                                de remises toute l'année, et de nombreux autres privilèges. Un espace où chaque membre est valorisé et choyé.
                            </p>
                            <a href="le club" class="relative inline-flex items-center px-12 w-64 py-3 overflow-hidden text-lg font-medium text-white border-2 border-[#c5a888]  bg-gradient-to-br from-[#c5a888]  to-orange-200 rounded-full hover:text-gray-600 group hover:bg-gray-50  intersect-once motion-duration-[2s] intersect:motion-translate-y-in-150 hover:motion-translate-x-out-25">
                                <span class="absolute left-0 block w-full h-0 transition-all  bg-gray-50  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="relative">En savoir plus</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Acceuil;
