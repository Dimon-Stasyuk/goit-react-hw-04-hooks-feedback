import './Section.css';

const Section = ({ title, children }) => {
  return (
    <>
      <h1 className="main-title">{title}</h1>
      {children}
    </>
  );
};

export default Section;
