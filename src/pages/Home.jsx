import React, {useCallback, useEffect} from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { useSelector, useDispatch } from "react-redux";

import {setCategory, setSortBy} from '../redux/actions/filters';
import {fetchPizzas} from '../redux/actions/pizzas';
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [{name: 'популярности', type: 'popular', order: 'desc'}, 
{name: 'цене', type: 'price', order: 'desc'},
{name: 'алфавит', type: 'name', order: 'asc'}]

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const {category, sortBy} = useSelector(({filters}) => filters)

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy))
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {

    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategory={onSelectCategory}
          items={categoryNames}
          activeCategory={category}
        />
        <SortPopup onClickSortType={onSelectSortType} activeSortType={sortBy.type} items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded 
          ? items.map((obj) => (
            <PizzaBlock key={obj.id} {...obj}/>
          ))
          : Array(12)
          .fill(0)
          .map((_, index) => <LoadingBlock key={index}/>)
      }
      </div>
    </div>
  );
}

export default Home;
