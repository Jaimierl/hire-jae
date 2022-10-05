import Head from 'next/head';
import Link from 'next/link';

export default function Home(){

  return (
        <div>
            <Head>
                <title>Hire Jae!</title>
            </Head>
            <header className = "flex items-center p-4 justify-between bg-header-green text-text-black font-semibold">
                <h1 className = "text-4xl">Cookie Stand Admin</h1>
            </header>
            <main className="bg-main-bg">
                <div className = "p-8 flex justify-center">
                  <div className = "p-4 bg-form-bg  flex rounded-md w-2/3 flex-col">  
                    <h1 className ="flex justify-center text-xl font-semibold">Create Cookie Stand</h1>
                   
                  </div>   
                </div>  
            </main>
            <footer className = "p-4 bg-footer-green text-gray-50 justify-center">
              <p className = "text-footer-text">2022</p>
              <div className = "text-right">
                <a href="https://www.linkedin.com/in/jae-loney/">
                <p> Made by Jae - Click to Connect! </p>
                </a>
                <h1 className="title">
                <Link href="/start">Click to Read More on Next JS!</Link>
                </h1>
              </div>
            </footer>
        </div>
    );
}
