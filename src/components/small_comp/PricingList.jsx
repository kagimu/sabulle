import { pricing } from "/src/api/pricing_list.js";
import { Check } from "../../api/pricing_list";
const PricingList = () => {
  return (
    <div className="flex gap-[3rem]  max-lg:flex-wrap px-16  ">
      {pricing.map((item) => (
        <div
          key={item.id}
          className={`w-[19rem] max-lg:w-full h-full px-6 bg-white/40
        bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:mt-4
          [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 shadow-lg motion-preset-pop first:motion-duration-[0.5s] 
          even:motion-duration-[1s]  last:motion-duration-[1.5s] motion-translate-y-in-50   `}
        >
          <h4 className="text-2xl mb-4 font-bold text-center">{item.title}</h4>
          <p className=" text-center min-h-[4rem] mb-3 text-">
            {item.description}
          </p>
          <div className="flex items-center h-[4.5rem] mb-6 justify-center text-center">
            {item.price && (
              <>
                <div className="text-[3rem]">$</div>
                <div className="text-[4.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>
          {/*button*/}
          <ul>
            {item.features.map((feature, index) => (
              <li
                className="flex items-start py-5 border-t border-n-6"
                key={index}
              >
                
                <img src={check} alt="check" />
                <p className="ml-4 body-2">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
