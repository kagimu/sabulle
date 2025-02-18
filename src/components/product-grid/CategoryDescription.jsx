function CategoryDescription({ title, desc }) {
    return (
        <div className="light-gray-bg-custom">
            <div className="p-9 pt-16 pb-16 max-w-screen-2xl mx-auto">
                <div className=" max-w-screen-2xl mx-auto p-10 py-§0 text-center">
                    <h1 className="text-7xl mb-4 text-transparent bg-gradient-to-br  bg-clip-text from-[#c5a888]  to-orange-200 drop-shadow-lg leading-[4rem]  motion-duration-[2s] motion-blur-in-md motion-translate-y-in-50">All {title}</h1>
                    <p className="md:w-2/4 text-lg font-light">{desc}</p>
                </div>
            </div>
        </div>
    );
}

export default CategoryDescription;
