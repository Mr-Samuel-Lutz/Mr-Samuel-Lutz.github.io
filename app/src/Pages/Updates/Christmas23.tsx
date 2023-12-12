import FamilyPhoto from "../../Images/2024/Family_Photo.jpg";

const Christmas23 = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="m-4 w-1/3 flex flex-col items-center">
        <h2 className="font-semibold text-xl mb-2">
          Merry Christmas! (December 2023)
        </h2>
        <img src={FamilyPhoto} alt="Our Family (Sam, Emily, and Tubby)" className="rounded-xl" />
        <div className="my-2">
          Hello family and friends. We have had an eventful year. We adopted
          Emily's childhood barn cat Tubby into our family. Sam has just
          completed his second year of working for 3M as a Software Engineer. On
          September 26th, we closed on our first house! Emily began taking
          Realtor classes. In the meantime as she has worked on her classes,
          Emily has also just began substitute teaching this winter.
        </div>
        <div>YouTube Channel, Tubby, Camping, House, Em's Business</div>
      </div>
    </div>
  );
};

export default Christmas23;
