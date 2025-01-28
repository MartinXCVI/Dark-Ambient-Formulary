// Components
import Heading from "./components/Heading"
import ContactForm from "./components/ContactForm"

// React Hooks
import { useRef, useEffect, useCallback } from "react";


function App() {
  // Rendering spheres and making them move randomly.
  function SpheresMovement() {
    // Creating a reference to store all sphere DOM elements. It starts as an empty array
    const spheresRef = useRef([])
    // Saving each sphere DOM element in the array
    const setSphereRef = (sphere, index)=> {
      spheresRef.current[index] = sphere
    }
    // Function to move the spheres
    /* useCallback ensures the moveSpheres function doesn't get 
    re-created unnecessarily, optimizing performance */
    const moveSpheres = useCallback((sphere) => {
      if(sphere) {
        const maxXAxis = window.innerWidth - sphere.clientWidth
        const maxYAxis = window.innerHeight - sphere.clientHeight
        const randomXPosition = Math.random() * maxXAxis
        const randomYPosition = Math.random() * maxYAxis
        sphere.style.right = `${randomXPosition}px`
        sphere.style.top = `${randomYPosition}px`
      }
      console.log('moveSpheres called')
    }, []) // No dependency array required - leave it empty

    // Effect to handle intervals
    useEffect(() => {
      // Independent intervals for each sphere
      const intervals = spheresRef.current.map((sphere) => {
        if(sphere) {
          const randomDelay = Math.random() * 7000 + 1000 // Random delay between 1 and 8 seconds
          moveSpheres(sphere) // Move the sphere immediately
          return setInterval(() => moveSpheres(sphere), randomDelay)
        }
        return null
      })
  
      return ()=> {
        // Clearing all intervals on cleanup
        intervals.forEach((interval) => clearInterval(interval));
      }
    }, [moveSpheres])

    // Resize listener to update positions dynamically
    useEffect(() => {
      const handleWindowResize = ()=> {
        spheresRef.current.forEach((sphere) => {
          moveSpheres(sphere)
        })
      }
      window.addEventListener("resize", handleWindowResize)
      return () => window.removeEventListener("resize", handleWindowResize)
    }, [moveSpheres])

    // Creating 45 sphere elements dynamically.
    const renderSpheres = ()=> {
      return Array.from({ length: 50 }).map((_, index) => (
        <div
          key={index}
          ref={(sphere) => setSphereRef(sphere, index)}
          className="spheres"
          style={{
            animationDelay: `${Math.random() * 5}s, ${Math.random() * 10}s`,
          }}
        />
      ))
    }
    return <div>{renderSpheres()}</div>;
  } // End of SpheresMovement

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
