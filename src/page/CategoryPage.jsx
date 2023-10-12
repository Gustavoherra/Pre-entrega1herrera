import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";

const Category = () => {
  const [chars, setChars] = useState([]);

  let { categoryId } = useParams();

  console.log(categoryId);

  useEffect(() => {
    axios("https://developers.mercadolibre.com.ar/es_ar/dominios-y-categorias#close").then((res) =>
      setChars(res.data.results)
    );
  }, []);

  let filteredCharacters = chars.filter((char) => {
    return char.species === categoryId;
  });

  return (
    <div className="Cards-List">
      {filteredCharacters.map((char) => {
        return (
          <div style={{ margin: 10 }} key={char.id}>
            <CardUser char={char} />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
