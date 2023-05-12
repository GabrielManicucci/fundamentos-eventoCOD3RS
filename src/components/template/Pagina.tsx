export default function Pagina(props: any) {
 return (
  <div className="flex flex-col items-center justify-center h-screen w-screen text-white bg-[url('https://source.unsplash.com/random/1920*1080/?universe,abstract,background')] bg-no-repeat bg-cover">
    <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-70">
      {props.children}
    </div>
  </div>
 )
}