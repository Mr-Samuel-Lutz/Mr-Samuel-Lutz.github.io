import { Carousel } from "@material-tailwind/react";
import FamilyPhoto from "../../Images/2024/Family_Photo.jpg";

const Christmas23 = () => {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="m-4 md:w-1/3 flex flex-col items-center">
          <h2 className="font-semibold text-xl mb-2">
            Merry Christmas! (December 2023)
          </h2>
          <img
            src={FamilyPhoto}
            alt="Our Family (Sam, Emily, and Tubby)"
            className="rounded-xl"
          />
          <div>
            <div className="font-semibold text-center my-2">
              Merry Christmas Family and Friends!
            </div>
            <div className="text-left indent-6">
              We have a lot to be thankful for this past year. In February, we
              adopted Emily's childhood barn cat Tubby into our family.
            </div>
            <div className="text-left indent-6">
              In April, we entered into the Gigazone Gaming competition, where
              we competed playing the Super Smash Bros Video Game. There were
              lots of people, a huge stage where people competed, and during an
              intermission, Steve Wozniak (co-founder of Apple) was there to
              give a talk! It was a lot of fun. Sam got eliminated right away,
              but Emily made it three rounds before being eliminated. For the
              event, there was also a cosplay (dress up) competition, so we
              dressed up as The Joker and Harley Quinn from Batman. We did not
              win that either, but lots of people wanted to take pictures with
              us!
            </div>
            <div className="text-left indent-6">
              Since we were living next door to Sam’s parents this
              Spring-Summer, we took advantage of being on the lake. We spent a
              lot of time reading on the lake, putt-putting around on the
              pontoon, and enjoying nice weather with friends and family. Over
              the summer, Sam picked up the hobby of home brewing beer. He has
              made four separate five-gallon batches of beer this year. He has
              had a lot of fun learning the process of brewing.
            </div>
            <div className="text-left indent-6">
              On August 7th, we celebrated two years of marriage! To celebrate
              our anniversary we went on a trip across Wisconsin. We stayed in a
              cute little tiny cabin, got to visit friends and family, and ended
              the trip by camping at Madeline Island, which caused us to both
              get Bronchitis for the next couple of months. On September 26th,
              we closed on the purchase of our first house!
            </div>
            <div className="text-left indent-6">
              September 30th, we went to Brick Fest Live, a LEGO Convention in
              Minneapolis. We had lots of fun looking at all of the LEGO builds.
              The next day, Sam went to a Macklemore concert with his sister
              Meghan! They had a lot of fun. A month later, Sam and Emily went
              with Sam’s parents to a Queen + Adam Lambert concert. The rest of
              our winter and fall has been filled in with unpacking and settling
              into our house. When we are not doing that, we have been spending
              time with our siblings, nieces and nephews, friends, and family.
              Our favorite winter activities this year have been Board Games and
              LEGO (of course). There has not been much snow yet this year, but
              we hope to get enough to do a little skiing, and we plan to go
              skating this break.
            </div>
            <div className="text-left indent-6">
              Sam has just completed his second year of working for 3M as a
              Software Engineer. Emily has begun taking realtor classes. As she
              has worked on her classes, Emily has also been substitute teaching
              this winter. Emily has been doing all of this in addition to her
              self-owned business: MemSTAR Studio, where she converts customers’
              home videos to digital.
            </div>
            <div className="text-left indent-6">
              We hope all of our family and friends are doing well, and that you
              all have a very Merry Christmas!
            </div>
            <div className="text-left indent-6">With love,</div>
            <div className="text-left indent-12 italic">Sam & Emily Lutz</div>
          </div>
        </div>
        {/* <Carousel placeholder={"Our 2023 Summary"} className="rounded-xl">
        <img
          src={FamilyPhoto}
          alt="1"
        />
        <img
          src={FamilyPhoto}
          alt="2"
        />
        <img
          src={FamilyPhoto}
          alt="3"
        />
        <img
          src={FamilyPhoto}
          alt="4"
        />
      </Carousel> */}
      </div>
    </div>
  );
};

export default Christmas23;
