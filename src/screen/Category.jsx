import Link from '../components/Link';
import links from '../context/links';

export default function Category({ onCategory }) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-3">
      {links.map((link) => (
        <Link
          onClick={() => onCategory(link.id)}
          key={link.id}
          category={link.category}
          bgColor={link.bgColor}
          textColor={link.textColor}
        />
      ))}
    </div>
  );
}
