import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { Button, MovingBorder } from "./ui/moving-border";

const Hero = () => {
  return (
    <section className="">
      <BackgroundBeamsWithCollision>
        <div className="relative text-black p-4">
          <Button borderRadius="1.75rem">Hello world</Button>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default Hero;
