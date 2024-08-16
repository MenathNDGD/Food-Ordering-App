import SectionHeader from "@/components/layout/SectionHeader";

export default function About() {
    return (
        <section className="text-center my-16">
            <SectionHeader
                subHeader={'Our story'}
                mainHeader={'About us'}
            />
            <div className="max-w-md text-gray-500 mx-auto mt-4 flex flex-col gap-4">
                <p>Welcome to Pizzalicious, where we craft every pizza with passion and precision. At Pizzalicious, we believe that great pizza starts with the freshest ingredients and a love for authentic flavors. Our menu is a celebration of both classic and innovative recipes, offering something for everyone, from traditional Margherita to bold, gourmet creations. Whether you're dining in with friends, grabbing a slice on the go, or enjoying a cozy night at home, Pizzalicious is dedicated to delivering a delicious experience every time. Join us for a taste of pizza perfection, where every bite is a slice of happiness!</p>
                <p>At Pizzalicious, we’re more than just a pizza place – we’re a destination for those who crave flavor and quality. Our passion for pizza shines through in every hand-tossed crust, every layer of rich sauce, and every topping, sourced fresh to ensure the best taste. Whether you’re here for a family dinner, a quick lunch, or a late-night bite, we’re committed to serving up delicious, mouthwatering pizzas that keep you coming back for more. </p>
                <p>From the first bite to the last, Pizzalicious is all about bringing people together over great food in a warm, welcoming atmosphere. Come experience the magic of Pizzalicious, where every meal is made with love.</p>
            </div>
      </section>
    );
}