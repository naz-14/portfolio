import { useEffect, useRef, useState } from "react";
import { FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const navigation = [
  { name: "Acerca de mi", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  { name: "Proyectos", href: "#projects" },
];

const socials = [
  {
    icon: <FaGithubAlt size={24} />,
    href: "https://",
  },
  { icon: <FaLinkedinIn size={24} />, href: "https://" },
  { icon: <FaTwitter size={24} />, href: "https://" },
];

const experience = [
  {
    id: 1,
    period: ["2022", "Ahora"],
    title: "Technical Leader",
    company: "Enigmatech MX",
    paragraphs: [
      "Definí la estructura de múltiples proyectos a partir de los requerimientos del cliente, los cuales me fueron proporcionados mediante mí Product Owner. Seleccione las tecnologías que más se adaptaban a dichos requerimientos y paso a paso fui guiando a mi equipo de Desarrolladores tanto front-end como back-end. Mis equipos constaron de entre 2 y 5 personas.",
    ],
    techs: [
      "JavaScript",
      "TypeScript",
      "NodeJs",
      "ExpressJs",
      "GraphQL",
      "MySQL",
      "ReactJS",
      "Vite",
      "NextJS",
    ],
  },
  {
    id: 2,
    period: ["2021", "2023"],
    title: "Full Stack Developer Jr",
    company: "Enigmatech MX",
    paragraphs: [
      "Contrui y desplegue multiples plataformas web y aplicaciones moviles de alta calidad para distintos clientes como Firex Mexico, El Colorado Tours y Keeper entre otros.",
      "Contribui con mi lider tecnico en la definicion de la arquitectura de la mayoria de proyectos realizados lo cual me perfilo hacia lider tecnico",
    ],
    techs: [
      "JavaScript",
      "TypeScript",
      "NodeJs",
      "ExpressJs",
      "GraphQL",
      "MySQL",
      "ReactJS",
      "Vite",
      "NextJS",
    ],
  },
  {
    id: 3,
    period: ["Jul", "Dic 2021"],
    title: "Frontend/Mobile Developer",
    company: "Dynamic Solutions MX",
    paragraphs: [
      "Ayude a mantener plataformas web realizadas en ReactJs, ademas de implementar un componente reutilizable de tablas con ayuda de la libreria React Table aplicando buenas practicas y principios solid.",
      "Ademas de solucionar un bug en el inicio de sesion en backend y en frontend",
    ],
    techs: [
      "JavaScript",
      "TypeScript",
      "NodeJs",
      "ExpressJs",
      "GraphQL",
      "ReactJS",
      "React Native",
    ],
  },
];

const projects = [
  {
    id: 1,
    title: "Enigmasuite",
    paragraphs: [
      "Plataforma WMS en la cual en un inicio participe como front-end developer, despues como full-stack developer y finalmente como lider tecnico hasta la fecha.",
      "Por el momento sigo deifiniendo alcances, arquitectura y requerimientos del proyecto ademas de auditar y desplegar la aplicacion tanto en entornos de pruebas como en produccion",
    ],
    techs: ["ReactJS", "Typescript", "NodeJs", "ExpressJs", "GraphQL", "AWS"],
    image: { src: "enigmasuite.png", alt: "Enigmasuite" },
  },
  {
    id: 2,
    title: "Enigmasuite WMS",
    paragraphs: [
      'Aplicacion movil que complementa la plataforma "Enigmasuite" ya que se realiza todo el proceso de surtido de ordenes mediante escaneo de racks y productos. Tambien se encuentra la funcion de acomodo de mercancia y relleno de la misma.',
      "En este proyecto defini junto con mi lider tecnico como seria el algoritmo para la deteccion de ubicaciones mas optima para poder realizar el surtido mas rapido, participe en la elaboracion de distintos componentes ademas de que sente la base de la cual partiria el comienzo del proyecto. Actualmente de ser necesaria una nueva caracteristica soy el responsable de supervizar.",
    ],
    techs: [
      "React Native",
      "Typescript",
      "GraphQL",
      "Apollo Client",
      "Apollo Server",
    ],
    image: { src: "enigmasuite.png", alt: "Enigmasuite" },
  },
  {
    id: 3,
    title: "Enigma routes",
    paragraphs: [
      "Aplicacion movil la cual consiste en poder registrar distintos usuarios los cuales tienen el perfil de conductor con el objetivo de que puedan tomar pedidos o transferencias las cuales deben ser entregadas en un punto establecido, los usuarios pueden ver su programacion de rutas en distintos periodos de tiempo, ademas de tener una ruta definida de punto a punto",
      "Realize la definicion de la arquitectura asi como el alcance de la aplicacion con base en los requerimientos proporcionados y en un principio participe como mobile developer para despues pasar a liderar el desarrollo de esta.",
    ],
    techs: [
      "React Native",
      "Typescript",
      "Google Maps API",
      "Here route points",
      "GraphQL",
      "MySQL",
    ],
    image: { src: "enigmasuite.png", alt: "Enigmasuite" },
  },
  {
    id: 4,
    title: "Guyana Tickets",
    paragraphs: [
      "Proyecto de administracion de entradas para Guyana Energy Conference & Supply Chain Expo el cual consiste en una plataforma web donde se pueden imprimir credenciales para autorizar el acceso mediante una app creada para android. Se realizo tambien otra app la cual es unicamente informativa con diferentes secciones, entre ellas el perfil de usuario, noticias de la conferencia, horarios y mapa del sitio.",
      "Participe como full-stack developer desarrollando distinas caracteristicas tanto en backend, frontend y mobile, posteriormente se solicitaron ajustes para hacer un control de accesos mas generalizado y yo me encargue de dichas modificaciones conforme los requerimientos solicitados.",
    ],
    techs: ["ReactJS", "Typescript"],
    image: { src: "enigmasuite.png", alt: "Enigmasuite" },
  },
  {
    id: 5,
    title: "Plataforma de tickets y conteo de votos",
    paragraphs: [
      "Proyecto de administracion de entradas para Guyana Energy Conference & Supply Chain Expo el cual consiste en una plataforma web donde se pueden imprimir credenciales para autorizar el acceso mediante una app creada para android. Se realizo tambien otra app la cual es unicamente informativa con diferentes secciones, entre ellas el perfil de usuario, noticias de la conferencia, horarios y mapa del sitio.",
      "Participe como full-stack developer desarrollando distinas caracteristicas tanto en backend, frontend y mobile, posteriormente se solicitaron ajustes para hacer un control de accesos mas generalizado y yo me encargue de dichas modificaciones conforme los requerimientos solicitados.",
    ],
    techs: ["ReactJS", "Typescript"],
    image: { src: "enigmasuite.png", alt: "Enigmasuite" },
  },
];

export default function Hero() {
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef(new Array());
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    sections.current = Array.from(document.querySelectorAll("[data-section]"));
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const pageYOffset = window.scrollY;
    let newActiveSection = null;
    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        newActiveSection = `${section.id}`;
      }
    });
    if (newActiveSection !== null) setActiveSection(newActiveSection);
  };

  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold ">Uriel Alvarez Valdez</h1>
          <p className="text-lg font-medium">Tech lead y Fullstack developer</p>
          <p className="mt-4 max-w-xs leading-normal">
            Contruyo, Lidero y desarrollo proyectos completos.
          </p>
          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              {navigation.map((item) => (
                <li>
                  <a
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center py-3 ${
                      "#" + activeSection === item.href ? "active" : ""
                    }`}
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-red-500 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-red-500 group-focus-visible:text-slate-200">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <ul className="ml-1 mt-8 flex items-center">
          {socials.map((social) => (
            <li className="mr-5 text-xs">
              <a href={social.href}></a>
              {social.icon}
            </li>
          ))}
        </ul>
      </header>
      <div className="pt-24 lg:w-1/2 lg:py-24">
        <section
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          id="about"
          data-section
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              About
            </h2>
          </div>
          <div>
            <p className="mb-4">
              Desde el 2012 comence a interesarme en desarrollo, tanto de apps
              como web, durante un tiempo como hobie creaba temas para android a
              pesar de tener un conocimiento reducido en dicho sistema. Lo cual
              me llevo a estar actualmente interesado en seguir creando
              aplicaciones para movil y web.
            </p>
            <p className="mb-4">
              Mi objetivo en estos momentos es seguir realizando proyectos y
              liderando equipos, asi mismo seguir aprendiendo de las personas
              que voy encontrando en el camino. Ademas de en mi tiempo libre
              seguir pasando los juegos de mi estudio favorito From Software.
            </p>
            <p>
              La mayor parte del conocimiento en tecnologias que tengo, en un
              inicio fue de forma autodidacta, cuando me fue posible comenzar a
              trabajar fue que adquiri muchas mas experiencias que me hacen el
              Desarrollador y Lider que ahora soy :D
            </p>
          </div>
        </section>
        <section
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          data-section
          id="experience"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Experience
            </h2>
          </div>
          <div>
            <ol className="group/list">
              {experience.map((job) => {
                return (
                  <>
                    <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-200/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2">
                          {`${job.period[0]} — ${job.period[1]}`}
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-red-600">
                            {`${job.title} - ${job.company}`}
                          </h3>
                          {job.paragraphs.map((paragraph) => (
                            <p className="mt-2 text-sm leading-normal">
                              {paragraph}
                            </p>
                          ))}
                          <ul className="mt-2 flex flex-wrap">
                            {job.techs.map((tech) => (
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-red-500/20 px-3 py-1 text-xs font-medium leading-5 text-red-500 ">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  </>
                );
              })}
            </ol>
            <div className="mt-12">
              <a
                href="./UrielAlvarez.pdf"
                className="inline-flex items-baseline font-medium leading-tight text-red-600 hover:text-red-800 focus-visible:text-red-600 font-semibold text-red-600 group/link text-base"
                target="_blank"
                aria-label="Descarga cv completo"
              >
                <span>
                  Descargar CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      // fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      // clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>
        <section
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          aria-label="Selected projects"
          data-section
          id="projects"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-red-600 lg:sr-only">
              Projects
            </h2>
          </div>
          <div>
            <ul className="group/list">
              {projects.map((project, i) => {
                if (i < 4) {
                  console.log(i);
                  return (
                    <li className="mb-12">
                      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-200/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                          <h3>
                            <a
                              href="#"
                              className="inline-flex items-baseline font-medium leading-tight text-red-600 hover:text-red-600 focus-visible:text-red-600  group/link text-base"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                {project.title}
                                <span className="inline-block">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                  >
                                    <path
                                      // fill-rule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      // clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </h3>
                          {project.paragraphs.map((paragraph) => (
                            <p className="mt-2 text-sm leading-normal">
                              {paragraph}
                            </p>
                          ))}

                          <ul className="mt-2 flex flex-wrap">
                            {project.techs.map((tech) => (
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-red-500/20 px-3 py-1 text-xs font-medium leading-5 text-red-500 ">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <img
                          alt={project.image.alt}
                          loading="lazy"
                          width="200"
                          height="48"
                          decoding="async"
                          data-nimg="1"
                          className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                          style={{ color: "transparent" }}
                          src={`./images/${project.image.src}`}
                        ></img>
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
