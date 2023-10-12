// InputContext.js
import React, { createContext, useContext, useState, ReactNode } from "react";

interface InputState {
  titleTerm: string;
  authorTerm: string;
  isbnTerm: string;
  subjectTerm: string;
  publisherTerm: string;
  isAdvancedSearch: boolean;
  setTitleTerm: (value: string) => void;
  setAuthorTerm: (value: string) => void;
  setIsbnTerm: (value: string) => void;
  setSubjectTerm: (value: string) => void;
  setPublisherTerm: (value: string) => void;
  setIsAdvancedSearch: (value: boolean) => void;
}

const InputContext = createContext<InputState | undefined>(undefined);

interface InputProviderProps {
  children: ReactNode;
}

export function InputProvider({ children }: InputProviderProps) {
  const [titleTerm, setTitleTerm] = useState("");
  const [authorTerm, setAuthorTerm] = useState("");
  const [isbnTerm, setIsbnTerm] = useState("");
  const [subjectTerm, setSubjectTerm] = useState("");
  const [publisherTerm, setPublisherTerm] = useState("");
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);

  return (
    <InputContext.Provider value={{ titleTerm, authorTerm, isbnTerm, subjectTerm, publisherTerm, isAdvancedSearch, setTitleTerm, setAuthorTerm, setIsbnTerm, setSubjectTerm, setPublisherTerm, setIsAdvancedSearch }}>
      {children}
    </InputContext.Provider>
  );
}

export function useInput() {
  const context = useContext(InputContext);
  if (context === undefined) {
    throw new Error("useInput must be used within an InputProvider");
  }
  return context;
}
