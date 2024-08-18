import Image from "next/image";
import RightArrow from "../icons/RightArrow";
import More from "../icons/More";

export default function Hero() {
    return (
        <section className="hero mt-4">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">Everything <br /> is better <br /> with a <span className="text-primary">Pizza</span></h1>
                <p className="my-6 text-gray-500 text-sm">Pizza is the missing piece that makes every day complete, a simple yet delicious joy in your life.</p>
                <div className="flex justify-center gap-4 text-sm">
                    <button className="bg-primary flex items-center gap-2 text-white uppercase px-4 py-2 rounded-full">
                        Order now
                        <RightArrow />
                    </button>
                    <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
                        Learn more
                        <More />
                    </button>
                </div>
            </div>
            <div className="w-full h-full relative">
                <Image src={'/pizza1.png'} layout={'fill'} objectFit={'contain'} alt={'Pizza'} />
            </div>
        </section>
    );
}