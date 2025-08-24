import { useState } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from "react-router";
import { SearchInputStatic } from "@features/products-list/components/SearchInputStatic";
import { SearchInputExpanded } from "@features/products-list/components/SearchInputExpanded";
import { setProductsFiltered } from "@features/products-list/productsListStore";
import { ROUTES } from "@app/routing/routes";

export function SearchInput() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandInput, setExpandInput] = useState(false);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const location = useLocation();
  const navigate = useNavigate();

  const handleSelectSuggestion = (suggestion: string) => {
    setSearchTerm(suggestion); 
    handleFilterProducts(suggestion);
  }

  const handleFilterProducts = (term: string) => {
    dispatch(setProductsFiltered(term));

    if(location.pathname !== ROUTES.HOME.route) {
      navigate(ROUTES.HOME.route)
    }
  }

  const handleInputFocus = () => {
    if(isMobile) {
      setExpandInput(true);
    }
    setShowSuggestions(true)
  }

  const handleCloseExpanded = () => {
    setExpandInput(false);
    setShowSuggestions(false);
  }

  if(isMobile && expandInput) {
    return (
      <SearchInputExpanded 
        handleFilterProducts={handleFilterProducts}
        handleInputFocus={handleInputFocus}
        handleSelectSuggestion={handleSelectSuggestion}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleCloseExpanded={handleCloseExpanded}
        setShowSuggestions={setShowSuggestions}
        showSuggestions={showSuggestions} 
      />
    )
  }
  
  return (
    <SearchInputStatic 
      handleFilterProducts={handleFilterProducts}
      handleInputFocus={handleInputFocus}
      handleSelectSuggestion={handleSelectSuggestion}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      setShowSuggestions={setShowSuggestions}
      showSuggestions={showSuggestions} 
    />
  )
}

