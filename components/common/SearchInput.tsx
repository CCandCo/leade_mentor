"use client";
import { useDebounce } from "@/hooks/use-debounce";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  // searchAPIRoute?: string;
}

const SearchInput = ({ placeholder, className }: SearchInputProps) => {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery.trim() === "") return;

    console.log("Searching for:", debouncedQuery);
  }, [debouncedQuery]);

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder={placeholder || "Search..."}
        className="w-48 xl:w-64 h-9 pl-9 pr-4 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
      />
    </div>
  );
};

export default SearchInput;
