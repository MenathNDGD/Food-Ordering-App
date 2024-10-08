import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";

export default function HomeMenu() {
    return (
        <section>
            <div className="absolute w-full left-0 right-0">
                <div className="absolute left-0 -top-[70px] text-left -z-10">
                    <Image src={'/sallad1.png'} width={109} height={189} alt={'Sallad'} />
                </div>
                <div className="absolute -top-[100px] right-0 -z-10">
                    <Image src={'/sallad2.png'} width={107} height={195} alt={'Sallad'} />
                </div>
            </div>
            <div className="text-center mb-4">
                <SectionHeader
                    subHeader={'Check out'}
                    mainHeader={'Menu'}
                />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    );
}