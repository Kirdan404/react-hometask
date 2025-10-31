import { mockedAuthorsList } from "../constants";

export default function getAuthros(idAuthors: string[]): string[] {
    const authors: string[] = [];
    idAuthors.forEach(id => {
        const foundAuthor = mockedAuthorsList.find(author => author.id === id);
        if(foundAuthor) {
            authors.push(foundAuthor.name);
        } 
    });

    return authors;
}