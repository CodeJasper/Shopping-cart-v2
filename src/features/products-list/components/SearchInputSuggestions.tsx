const SUGGESTONS = ["Silla", "Banco", "Escalera"];

export type SearchInputSuggestionsProps = {
  handleSelectSuggestion: (suggestion: string) => void;
}

export function SearchInputSuggestions({ handleSelectSuggestion }: SearchInputSuggestionsProps) {
  return (
    <div className="absolute py-3 z-10 bg-white border border-gray-300 w-full mt-1 top-[40px]">
      <ul className="space-y-2">
        {SUGGESTONS.map((suggestion) => {
          return (
            <li className="w-full" key={suggestion}>
              <button
                className="px-4 text-left w-full hover:cursor-pointer hover:bg-gray-200 p-1"
                onMouseDown={() => handleSelectSuggestion(suggestion)}
              >
                {suggestion}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}