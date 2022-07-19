import { useParams } from "react-router-dom";

const VS_element = ({foodState}) => {

  const foodParam = useParams();
  
  return (
    <div>
      {
        foodState
        .filter(item => item.fields.name === foodParam.foodId)
        .map((item, index) => (
          <div key={index}>
            <h2>{item.fields.name}</h2>
            <img src={item.fields.picture.fields.file.url} alt="vs" />
            <p>{item.fields.description}</p>
            <ul>Zutaten:
              {Object.keys(item.fields.ingredients)
              .map((ingredient, index) => (
                <li key={index}>{ingredient}: {item.fields.ingredients[ingredient]}</li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>
  );
}

export default VS_element;