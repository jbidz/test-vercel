import { useRef, useLayoutEffect } from "react";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const h1Ref = useRef();
  const h2aRef = useRef();
  const h2bRef = useRef();
  const h2cRef = useRef();
  const h2dRef = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      h1Ref.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        duration: 1,
        y: 0,
      }
    );
    gsap.set(h2aRef.current, { opacity: 0, x: -100 });
    gsap.to(h2aRef.current, {
      scrollTrigger: {
        trigger: h2aRef.current,
        start: "top 80%",
        end: "bottom center",
      },
      x: 0,
      opacity: 1,
      duration: 1,
    });

    gsap.set(h2bRef.current, { opacity: 0, x: -100 });
    gsap.to(h2bRef.current, {
      scrollTrigger: {
        trigger: h2bRef.current,
        start: "top 80%",
        end: "bottom center",
      },
      x: 0,
      opacity: 1,
      duration: 1,
    });

    gsap.set(h2cRef.current, { opacity: 0, x: -100 });
    gsap.to(h2cRef.current, {
      scrollTrigger: {
        trigger: h2cRef.current,
        start: "top 80%",
        end: "bottom center",
      },
      x: 0,
      opacity: 1,
      duration: 1,
    });

    gsap.set(h2dRef.current, { opacity: 0, x: -100 });
    gsap.to(h2dRef.current, {
      scrollTrigger: {
        trigger: h2dRef.current,
        start: "top 80%",
        end: "bottom center",
      },
      x: 0,
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <>
      <main>
        <section className="section section-1">
          <h1 ref={h1Ref}>
            Positive and Inspirational
            <br />
            Quotes for Programmers
          </h1>
        </section>
        <section className="section section-2">
          <h2 ref={h2aRef}>
            Coding Positivity: Challenges as Catalysts for Creativity
          </h2>
          <p>
            In the vast realm of code, every challenge is an opportunity to
            unlock new levels of creativity and problem-solving prowess.
          </p>
        </section>
        <section className="section section-3">
          <h2 ref={h2bRef}>
            Dreams in Code: Brushstrokes of Digital Innovation
          </h2>
          <p>
            The beauty of programming lies in the power to turn dreams into
            digital reality, where each keystroke is a brushstroke painting the
            canvas of innovation.
          </p>
        </section>
        <section className="section section-4">
          <h2 ref={h2cRef}>
            Code of Life: Positive Iterations for a Brighter Future
          </h2>
          <p>
            In the code of life, every algorithm is a chance to create a
            positive impact, and every iteration is a step towards a brighter
            and more efficient future.
          </p>
        </section>
        <section className="section section-5">
          <h2 ref={h2dRef}>
            Architects of Tomorrow: Building Bridges of Logic
          </h2>
          <p>
            Programmers are the architects of tomorrow, building bridges of
            logic and towers of innovation that stand tall against the winds of
            technological change.
          </p>
        </section>
      </main>
      <footer>&copy; John Denver Burlas Bidong</footer>
    </>
  );
}

export default App;
