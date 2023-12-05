import Link from '../components/Link';
import links from '../context/links';

export default function Category({ onCategory, search }) {
  const filteredLinks = links.filter((link) =>
    link.category.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="flex flex-wrap justify-center items-center gap-3">
      {filteredLinks.map((link) => (
        <Link
          onClick={() => onCategory(link.id)}
          key={link.id}
          category={link.category}
          bgColor={link.bgColor}
          textColor={link.textColor}
          img={link.img}
        />
      ))}
    </div>
  );
}
