import lila from "../images/lila.jpg";
import moon from "../images/moon.jpg";
import jupiter from "../images/jupiter.jpg";

function Home() {
  return (
    <wrapper>
      <section className="h-screen w-screen">
        <img
          className="object-cover object-left h-screen min-w-full md:object-contain"
          src={jupiter}
          alt="jupiter"
        />
        <div className="text-white absolute top-1/4 left-4 m-4">
          <h1>THE GIANT</h1>
          <h2>JUPITER</h2>
          <p className="w-1/3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            ducimus, cumque, amet odio harum aut unde, distinctio eligendi
            aspernatur nobis sunt! Voluptates eveniet perferendis nulla
            molestiae, rem aut rerum doloremque!
          </p>
          <button>See more</button>
          <button className="text-orange-400">Subscribe</button>
        </div>
      </section>

      <section className="relative">
        <img
          className="object-cover object-right h-screen min-w-full"
          src={lila}
          alt="lila"
          style={{ objectPosition: "75% center" }}
        />
        <div className="absolute text-white top-36 left-4 m-4 p-4">
          <h1>Desgin slider</h1>
          <h2 className="text-teal-400">NEPTUNUS</h2>
          <p className="w-1/3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            ducimus, cumque, amet odio harum aut unde, distinctio eligendi
            aspernatur nobis sunt! Voluptates eveniet perferendis nulla
            molestiae, rem aut rerum doloremque!
          </p>
        </div>
      </section>

      <section className="relative">
        <img
          className="object-cover object-center h-screen min-w-full md:object-contain"
          src={moon}
          alt="moon, full moon"
        />
        <div className="absolute text-white top-36 left-4 m-4 p-4">
          <h1>IN THE NIGHTSKY</h1>
          <h2 className="text-gray-800">THE MOON</h2>
          <p className="w-1/3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            ducimus, cumque, amet odio harum aut unde, distinctio eligendi
            aspernatur nobis sunt! Voluptates eveniet perferendis nulla
            molestiae, rem aut rerum doloremque!
          </p>
        </div>
      </section>
    </wrapper>
  );
}

export default Home;
