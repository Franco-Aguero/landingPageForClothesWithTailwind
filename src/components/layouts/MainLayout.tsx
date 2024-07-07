import FirstSection from "components/sections/first";
import FourthSection from "components/sections/fourth";
import SecondSection from "components/sections/second";
import ThirdSection from "components/sections/third";

const MainLayout = () => {
  return (
    <main className="min-h-screen w-full bg-primary">
      <div className="mx-auto flex w-full max-w-[960px] flex-col px-6 text-fontC-primary md:px-8">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </div>
    </main>
  );
};

export default MainLayout;
