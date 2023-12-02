import Link from "./components/Link";
import links from "./context/links";


export default function App() {
  return (
    <div className="w-full h-screen bg-[#F8F8F2] p-3">
      <div className="flex flex-wrap justify-center items-center gap-3">
        {links.map((link) => (
          <Link key={link.id} category={link.category} bgColor={link.bgColor} textColor={link.textColor}/>
        ))}
      </div>
    </div>
  )
}