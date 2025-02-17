import { useDimensions } from "@/hooks/useDimensions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function SecondSection() {
  const { isMobile } = useDimensions();

  const projects = [
    {
      title: "Teste",
      id: 1,
      subtitle: "Sou formada em Marketing",
      content:
        "Sou formada em Marketing e atuo com Customer Success, Design e Marketing. Acredito no poder da comunicação visual e estratégica.",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Teste",
      id: 2,
      subtitle: "Sou formada em Marketing",
      content:
        "Sou formada em Marketing e atuo com Customer Success, Design e Marketing. Acredito no poder da comunicação visual e estratégica.",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Teste",
      id: 3,
      subtitle: "Sou formada em Marketing",
      content:
        "Sou formada em Marketing e atuo com Customer Success, Design e Marketing. Acredito no poder da comunicação visual e estratégica.",
      image: "https://picsum.photos/200/300",
    },
  ];

  const renderMobile = () => {
    if (isMobile) {
      return (
        <Carousel>
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="w-28 bg-primary h-80 flex justify-center items-end cursor-pointer border"
              >
                <div className="flex flex-col items-center text-center p-3 bg-gradient-to-b from-black/5 to-[#FEAD17]/100">
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      );
    }

    return projects.map((project) => (
      <div
        key={project.id}
        // style={{ backgroundImage: `url(${project.image})` }}
        className="w-full bg-primary h-80 flex justify-center items-end cursor-pointer border hover:-translate-y-2 transition-transform"
      >
        <div className="flex flex-col items-center text-center p-3 bg-gradient-to-b from-black/5 to-[#FEAD17]/100">
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
        </div>
      </div>
    ));
  };

  return (
    <section className="container">
      <div className="flex flex-col md:flex-col gap-10 items-center md:items-center w-full">
        <h2 className="font-[pacifico] text-5xl text-center">Projetos</h2>
        <div className="flex flex-col md:flex-row gap-7">{renderMobile()}</div>
      </div>
    </section>
  );
}
