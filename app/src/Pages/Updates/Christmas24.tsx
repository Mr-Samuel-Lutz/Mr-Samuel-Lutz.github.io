import { Carousel } from "@material-tailwind/react";
import FamilyPhoto from "../../Images/2024/Family_Photo.jpg";

const Christmas24 = () => {
  return (
    <div className="mb-8">
      <div className="w-full flex justify-center">
        <div className="m-4 md:w-1/3 flex flex-col items-center">
          <h2 className="font-semibold text-2xl mb-2 text-center">
            Merry Christmas and a Happy New Year! (December 2024)
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
              We started off our year with a vacation to Hawaii in January!
              Emily’s Aunt Vera and Uncle Doug were moving back from Hawaii to
              Minnesota this spring, so we went to visit them in Hawaii while we
              still had the chance. Once Emily’s aunt and uncle moved back to
              Minnesota from Hawaii, we helped move them in, and also got to cat
              sit Tulip and Iris for them. In exchange, we earned some golf
              lessons from Doug, and got to enjoy playing a few rounds of golf
              with Doug and Vera.
            </div>
            <div className="text-left indent-6">
              In April, we made a return to the Gigazone Gaming Convention in
              Bemidji! We are making it a yearly thing now. Last year, we played
              Super Smash Bros. but this year, we played a Trading Card Game
              called Magic: The Gathering. Emily put a lot of time and effort
              into creating a costume for a cosplay contest where she dressed up
              as Hera Syndulla, a Twi'lek from Star Wars. Sam dressed up as the
              10th Doctor from Doctor Who, using a costume he had on hand.
            </div>
            <div className="text-left indent-6">
              At the end of April, Emily passed Real Estate tests, got a Real
              Estate license, and is now working as a Realtor for the Northwoods
              Team at RE/MAX Advantage Plus. She has had a very successful first
              year as a Realtor, with multiple closings, both listing and
              selling houses, as well as helping clients find and buy houses as
              well! Emily also still substitute teaches at Grand Rapids High
              School from time to time, and we work together in our spare time
              to convert people’s home videos to digital. Sam is finishing his
              third year of working for 3M, and this year he has been working on
              the&nbsp;
              <a
                className="cursor-pointer text-blue-600 font-semibold hover:underline"
                rel="noreferrer noopener"
                target="_blank"
                href="https://digitalmaterialshub.3m.com/landing"
              >
                Digital Materials Hub
              </a>
              . He actually just created the landing page for the website in
              December! The landing page will go live in early January, so it
              might not be visible when you are reading this.
            </div>
            <div className="text-left indent-6">
              Emily threw a ‘May the Fourth' Star Wars themed Birthday Party for
              her 24th Birthday. He had a lot of fun, with activities including
              a Nerf Battle at the fairgrounds, Star Wars Bop-It. Stormtrooper
              Target Dart Practice, Star Wars Codenames, and more!
            </div>
            <div className="text-left indent-6">
              In the summer, we went to Brickworld Chicago, which is the largest
              LEGO Convention in the United States. Over 10,000 LEGO Nerds
              gathered to geek out at other people’s LEGO builds. We were really
              stoked to meet some of our favorite LEGO YouTubers in person! In
              July, Sam celebrated his 25th birthday. Over the 4th of July, we
              took a vacation and visited one of our friends on Madeline Island.
              It was fun roller blading around the island, and it was the best
              fireworks show we have ever seen. We also attended two family
              reunions. For one, we got to take a roadtrip to Missouri, and took
              some time off work, went camping, and then got to spend time with
              family for a few days, while staying at a mansion of an Airbnb.
              Our room was Harry Potter themed. On the return journey, we
              visited Emily’s mom in Wisconsin, and also got to stop and visit
              some friends in Madison.
            </div>
            <div className="text-left indent-6">
              To end the summer, Sam's parents sold their house (Sam's childhood
              home), and they are in the process of building a new house a
              couple of miles away. In the fall we also celebrated one year in
              our home. We went kayaking a few times with our friends Tim and
              Chris Stroming. We bought a Jeep, Emily joined Rotary, and we got
              to go to two of our niece Lily’s swim meets in Grand Rapids.
            </div>
            <div className="text-left indent-6">
              In November, our cat Tubby passed away at age 16 1/2. He lived a
              long and happy life. Being a barn cat for 14 years of his life, he
              survived encounters with plenty of predators. In the end, he
              passed away peacefully of his old age. He was happy and purring
              his whole life. He was a loved member of our family. He enjoyed
              snuggles, cuddles, and relaxing. His favorite activities included
              laying next to Sam while he worked to make sure he was getting
              work done (Sam called him his ‘little supervisor’), and sitting on
              Emily’s lap to try and stop her from getting any work done (and
              succeeded almost 100% of the time). He also loved to adventure
              outside (as long as it was not garbage truck day) and wander over
              to our neighbor Diane’s yard, to watch over her garden among the
              stone sculpures.
            </div>
            <div className="text-left indent-6">
              This winter, Emily has been volunteering at Lights in the Pines, a
              Christmas Light Show at the Fairgrounds here in Grand Rapids. She
              dresses up as an elf and spends time in ‘North Pole Junction’
              greeting, answering questions, helping kids write Christmas
              letters, etc.. Our hobbies for the winter include: LEGO (of
              course), Reading, and playing a couple of trading card games;
              Magic: The Gathering and Star Wars: Unlimited. We also plan to go
              skiing and skating since there is actually a proper winter with
              snow this year.
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

export default Christmas24;
