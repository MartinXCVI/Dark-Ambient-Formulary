// Components
import Heading from "./components/Heading"
import ContactForm from "./components/ContactForm"

// React Hooks
import { useRef, useEffect, useCallback } from "react";


function App() {

  function SpheresMovement() {

    const spheresRef = useRef([])

    const setSphereRef = (sphere, index)=> {
      spheresRef.current[index] = sphere
    }

    const moveSpheres = useCallback(()=> {
      spheresRef.current.forEach((sphere)=> {
        if(sphere) {
          const maxXAxis = window.innerWidth - sphere.clientWidth;
          const maxYAxis = window.innerHeight - sphere.clientHeight;
          const randomXPosition = Math.random() * maxXAxis;
          const randomYPosition = Math.random() * maxYAxis;
          sphere.style.right = `${randomXPosition}px`;
          sphere.style.top = `${randomYPosition}px`;
        }
      })
    }, [])

    useEffect(()=> {
      moveSpheres()
      const interval = setInterval(()=> {
        moveSpheres()
      }, 5000)
      return ()=> clearInterval(interval)
    }, [moveSpheres])

    const renderSpheres = () => {
      return Array.from({ length: 40 }).map((_, index) => (
        <div
          key={index}
          ref={(sphere) => setSphereRef(sphere, index)}
          className="spheres"
        />
      ))
    }
    return <div>{renderSpheres()}</div>;
  }

  return (
    <>
      <main id="principal">
        {SpheresMovement()}
        <Heading />
        <ContactForm />
      </main>
    </>
  )
}

export default App
