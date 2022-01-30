import headerStyles from "../styles/Header.module.css";

function Header() {
  const x = 5;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>web dev</span>
        Mews
      </h1>
      <p className={headerStyles.main}>Keep up to date with new skills</p>
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style> */}
    </div>
  );
}

export default Header;
