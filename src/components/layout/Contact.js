import SectionHeader from "@/components/layout/SectionHeader";

import Email from "@/components/icons/Email";
import Location from "@/components/icons/Location";
import Phone from "@/components/icons/Phone";

export default function Contact() {
    return (
        <section className="text-center my-16">
            <SectionHeader
                subHeader={'Don\'t hesitate to'}
                mainHeader={'Contact us'}
            />
            <div className="flex flex-col items-center gap-4 mt-8">
                <div className="flex items-center gap-2">
                    <Phone />
                    <a href="tel:+48458555666" className="text-xl text-gray-500">+48 458 555 666</a>
                </div>
                <div className="flex items-center gap-2">
                    <Location />
                    <a href="map:No. 88/B, St. John ST, New Town, SA." className="text-xl text-gray-500">No. 88/B, St. John ST, New Town, SA.</a>
                </div>
                <div className="flex items-center gap-2">
                    <Email />
                    <a href="mailto:info.pizzalicious@gmail.com" className="text-xl text-gray-500">info.pizzalicious@gmail.com</a>
                </div>
            </div>
        </section>
    );
}
