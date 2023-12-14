const UniversityList = ({ universities, sortClick }) => {
  return (
    <div>
      <button onClick={sortClick}>Sort</button>

      <ul>
        {universities.map((university, index) => {
          return (
            <li key={`uni ${index}`}>
              <a href={university.url}>{university.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UniversityList;
