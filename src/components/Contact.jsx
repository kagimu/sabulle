import React from 'react'

const Contact = () => {
  return (
    <section className=" bg-[#ede4d5]">
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md motion-preset-slide-up-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Nous Contacter</h2>
        
        <form action="#" className="space-y-8">
            <div>
                <label for="email" className="block mb-2 text-md font-medium text-gray-900 ">Email</label>
                <input type="email" id="email" className="shadow-sm bg-white/40 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  
                " placeholder="Email" required />
            </div>
            <div>
                <label for="subject" className="block mb-2 text-md font-medium text-gray-900 ">Sujet</label>
                <input type="text" id="subject" className="block p-3 w-full text-md text-gray-900 bg-white/40 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  " placeholder="Faites-nous savoir comment nous pouvons vous aider" required />
            </div>
            <div class="sm:col-span-2">
                <label for="message" className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400">Commentaire</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-md text-gray-900 bg-white/40 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500   " placeholder="Laissez un commentaire..."></textarea>
            </div>
            <button type="submit" className="py-3 px-5 text-md font-medium text-center bg-white/40 text-gray-900 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Envoyer</button>
        </form>
    </div>
    </section>
  )
}

export default Contact