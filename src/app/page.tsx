
import Front_page from "@/components/Main/Front_page/Front_page";
import Main from "../components/Main/Main"
export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="w-full ">

      <Front_page></Front_page>
      </div>
    

      <div className="w-full  2xl:w-[76%]  mx-auto py-12">
      <Main></Main>
      </div>
      <div className="">

      </div>
    </main>
  );
}
