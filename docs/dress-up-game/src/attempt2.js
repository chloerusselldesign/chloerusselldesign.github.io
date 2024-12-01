

function App() {
  const RenderMenu = () => {

  const [selectedMenuCategory, setSelectedMenuCategory] = useState("hair");

  return (
      <div id="menu_container">
      <div id="item_options_menu">
        <div className="menu_content">
        <RenderClothingItems selectedMenuCategory={selectedMenuCategory} setSelectedMenuCategory = {setSelectedMenuCategory}/>
        </div>
      </div>
        <div id="menu_tabs">
          <RenderMenuTabs selectedMenuCategory={[selectedMenuCategory, setSelectedMenuCategory]}/>
        </div>
      </div>
  );
  }

  const RenderMenuTabs = (selectedMenuCategory, setSelectedMenuCategory) => {

    const [menuCategories, setMenuCategories] = useState([
      {
        id: 1,
        stage: "face",
        name: "hair"
      },
      {
        id: 2,
        stage: "face",
        name: "eyes"
      },
      {
        id: 3,
        stage: "face",
        name: "nose"
      },
      {
        id: 4,
        stage: "face",
        name: "mouth"
      },
      {
        id: 5,
        stage: "face",
        name: "details"
      },
      {
        id: 6,
        stage: "face",
        name: "accessories"
      },
      {
        id: 7,
        stage: "clothes",
        name: "shirts"
      }
    ]);

    useEffect(() => {
      console.log(menuCategories);
    }, []);

    const [gameState, setGameState] = useState("face");

    console.log(gameState);

    const filterMenuCategories = () => {
      return menuCategories.filter(menuCategory => menuCategory.stage === gameState);
    }

    const filteredMenuCategories = filterMenuCategories(gameState);

    const changeSelectedCategory = (newCategory) => {
      setSelectedMenuCategory(newCategory);
      console.log(selectedMenuCategory);
    } 

    return filteredMenuCategories.map((menuCategory, index) => {
      return ( <li key = {index}
      className = {"menu_tab"}
      onClick={() => changeSelectedCategory(menuCategory.name)}>
        {menuCategory.name}
      </li> )
  });
  }

  const RenderClothingItems = ({selectedMenuCategory}) => {
    const [clothingItems, setClothingItems] = useState([
      {
        id: 1,
        category: "hair",
        name: "hair one"
      },
      {
        id: 2,
        category: "hair",
        name: "hair two"
      },
      {
        id: 3,
        category: "eyes",
        name: "eyes one"
      }
    ]);

    useEffect(() => {
      console.log(JSON.stringify(clothingItems));
    }, []);

    console.log(selectedMenuCategory);

    const filterClothingItems = () => {
      return clothingItems.filter (clothingItem => clothingItem.category === selectedMenuCategory);
    };

    console.log(filterClothingItems);

    const filteredClothingItems = filterClothingItems();

    console.log(JSON.stringify(filteredClothingItems));

    return filteredClothingItems.map((clothingItems, index) => {
      return ( <li key = {index}
      className = {"menu_content"}>
        {clothingItems}
      </li> )
  });
  }
 return (
  <div id="entire_container">
    <RenderMenu/>
  </div>
 )
}



export default App;
