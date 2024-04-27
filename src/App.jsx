import Movie from './component/Movie'
function App(){
  return(
    <>
      <section className="h-screen ">
          <div className="p-4 max-w-screen-xl  mx-auto  ">
            <h1 className="text-3xl text-white font-bold text-center">Movie Theater</h1>
          </div>
         <Movie/>
      </section>
    </>
  )
}
export default App