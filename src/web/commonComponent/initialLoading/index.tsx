import { useEffect, useState } from "react";
import initialLoading from "../../../assets/initialLoading.svg";

const InitialLoading: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress(100);
    }, 100); 
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center mt-[-30px]">
        <img
          src={initialLoading}
          alt="loading"
          className="w-[250px] h-[250px]"
        />
        <p className="text-[24px] font-normal">Talker</p>
        <div className="w-[230px] h-3 border-[2px] mt-2 rounded-full border-customBlue p-[2px]">
          <div
            className="h-full bg-customBlue transition-all duration-[2000ms] ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default InitialLoading;
