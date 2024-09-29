export default function Footer() {
  return (
    <div className="w-screen h-60 bg-gray-100 flex justify-center items-center">
      <ul className="flex justify-center gap-8">
        <li>
          <a
            href="https://www.linkedin.com/in/charlotteraz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-12" src="/assets/icons/linkedin.png" alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/charlottekyle.film"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-12" src="/assets/icons/instagram.png" alt="Instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
}
